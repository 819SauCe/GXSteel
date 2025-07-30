const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config({ quiet: true, path: '../.env' });

const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;
const MONGODB_URI = process.env.MONGODB_URI;
const CORS_ORIGIN = process.env.CORS_ORIGIN;
console.log(`CORS_ORIGIN: ${CORS_ORIGIN}`);
const allowedOrigins = process.env.CORS_ORIGIN.split(',').map(origin => origin.trim());

app.use(cookieParser());
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json())

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Conectado ao banco de dados!');
}).catch((err) => {
    console.error('Erro de conexão: ', err);
});

usersSchema = new mongoose.Schema({
    user_img: String,
    username: String,
    email: String,
    password: String,
    phone: String,
    address: String,
    role: String,
    liked: [String],
    createdAt: { type: Date, default: Date.now },
});

userSchema = new mongoose.Schema({
    id: String,
    img: String,
    name: String,
    rating: Number,
    comment: String,
    createdAt: { type: Date, default: Date.now },
});

const productSchema = new mongoose.Schema({
    sku: String,
    name: String,
    description: String,
    old_price: Number,
    price: Number,
    category: String,
    image: [String],
    stock: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: Boolean,
    ratings: [Number],
    comments: [{
        id: String,
        img: String,
        name: String,
        rating: Number,
        comment: String,
        createdAt: { type: Date, default: Date.now }
    }],
    likes: { type: Number, default: 0 }
});

productSchema.index({ name: 1 }, { unique: true });
const Product = mongoose.model('Product', productSchema);
const User = mongoose.model('User', usersSchema);

function authMiddleware(req, res, next) {
  const { token } = req.cookies;
  if (!token) return res.status(401).send({ message: 'Não autenticado' });

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (e) {
    res.status(401).send({ message: 'Token inválido' });
  }
}

app.get('/api/protected', authMiddleware, async (req, res) => {
    const user = await User.findById(req.user.id);
    if (!user) {return res.status(404).send({ message: 'Usuário não encontrado' });}
    user.user_img = req.body.user_img || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAMFBMVEXm5uampqaioqLDw8Pp6enj4+PZ2dmxsbHQ0NC4uLiqqqrIyMjNzc3d3d20tLS7u7t3QFl3AAAEDUlEQVR4nO2c27ajIAxAFQN4xf//28F2Ova09IiakNTJfupj99KEEIJVpSiKoiiKoiiKoiiKoiiKoiiKoiiKolwBuPHz11ey/HfXNl3wvu+9D13Tuuo7hQBcE/r6hT407ut0wDa9Ma8qC8b0jf0qHRfSJg+f4Lj/YS7Wdb+p3HU6Z7n/5zYx5uctlbvOHLMB97/9HbBDn6Fy0+kH2bEDrsszudM5uTYAY+5jeTycUWqehqrZY3KnkRk4YOf9LnU9SwwcsLvCZaWTZwPVvCtcVsws70076nKzkYVtDrtEm0ZWNdAeV1louf//EzC91fr76Cc5YQPdiZdswXRiZGA86RJtRiE2YM+qLAhZbeB4Vl4xswgZcAgu0UZEBQ0Hy5hXJOQAmHBc6lpAeoZDtXIKAVFzdr1c6SduFxiwXOp64H40x3ZkaWbmehMmjyfjmVMAtGghE4OmZX7PDvQwPtPwuliMUuaB4Q0amAKeS10H1qABhxgyMWhY6zM4uV1+hTcDjLgyI6dLNSDGf8wAA6fLqQ5TQoa156QyKqMy/7HMpVIzYC+aWs5gyVyq0LzSFuBSm7NrbZsv1dC4VKupqjCbgMwqcdnE6zXzHwVatPfM808DAFo+a9gfzPkZgAciZgGwTpsEnDUt9RmOjIgD2hg1GEfnAiLmhsWQ4U9ld6A9P27CfTSzcqVBoPii7RsBfnPppbxkN05mNGH3HE51Nnib/wlOVDXMe7J3wB62EXg36LCNQJebzYGUZkS6LEPnY841oB8qZpQ3bv6XWHPuu3IipLr8gN1TC5hO1Fr5zo6egIA9/xbZnTTuLtkWUE1jyH7PTBgnueFfTYPfk8+M8YNQHdip8k9Hng3Y/SoPHWnL5nJB8+g1LWHXNaFqTjXPJN1DRzgK4D8A+AtCP0NORwNnsEHCnROw+avkhk3gDhyYsFwWG97AAYfnsthw5mhwHnd2xvPZYLtw2sTlBdllseGKG8RT8xXPonK6W56GpYcOuHNzTzblLzih1DAfbEpXNmhnzCmKnzsj3TRN0xVVQRwySVG2CeVIsvKKL3j6dPz4IpeCA86YE3Np+mJf1djVUD5GuTY03RLzZFPo0aDtLX+VCWUeTYkHU+zR4Bf+SZki5TPOJzMybAqsNUSVf0KmxF6gkEu0IVdB+PpPtgx5hQbEVdkznloGY+ovF+rpQLLNclKGeAMNqJd/tgi0Mpa8Xn6GdkAQ+8LcFqStDbzB/zxIh52xvpiVC2kRgHe/JA/KWyik3bIUlB005DumGTKEJxzYV5m3ISzPSicz0nSG95W5XAjP0y8lQ9suT0HZQr+UTImO2TMm0LkUaf/9lKErAaJMYSj7mmNTGMqbNbY4hDKKoiiKoiiKoiiKoiiK8pE/enA7ljTquMIAAAAASUVORK5CYII=";
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = "não visível";
    user.phone = req.body.phone;
    user.address = req.body.address;
    res.send(user);
});

app.post('/api/logout', (req, res) => {
    res.clearCookie('token', { httpOnly: true, secure: true, sameSite: 'strict' });
    res.send({ message: 'Desconectado com sucesso' });
});

app.post('/api/register', async (req, res) => {
  const { username, email, password, phone, address } = req.body;
  if (await User.findOne({ email })) {
    return res.status(409).send({ message: 'Email já cadastrado' });
  }
  const hash = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hash, phone, address });
  await user.save();
  res.status(201).send({ message: 'Usuário registrado com sucesso' });
});

app.post('/api/login', async (req, res) => {
  const { username, password, Keep_me_logged_in } = req.body;
  const user = await User.findOne({ username });
  if (!user || !await bcrypt.compare(password, user.password)) {
  return res.status(401).send({ message: 'Credenciais inválidas' });}


  const expiresIn = Keep_me_logged_in ? '7d' : '1h';
  const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn });

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: Keep_me_logged_in ? 7 * 24 * 60 * 60 * 1000 : 3600 * 1000,
  });
  res.send({ message: 'Login realizado com sucesso!' });
});

app.post('/api/insert_product', async (req, res) => {
    const { sku, name, description, old_price, price, category, image, stock, isActive, comments } = req.body;
    if (!sku || !name || !description || !old_price || !price || !category || !image || !stock) {
    return res.status(400).send({ message: "Todos os campos são obrigatórios" });}
    const exists = await Product.findOne({ name });
    if (exists) return res.status(409).send({ message: 'Produto já existe', success: false });

    const newProduct = new Product({
        name,
        description,
        old_price,
        price,
        category,
        image,
        stock,
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: isActive || true,
        ratings: [],
        comments: comments || []
    });

    try {
        await newProduct.save();
        res.status(201).send({ message: 'Produto inserido com sucesso!', success: true });
    } catch (e) {
        res.status(500).send({ message: 'Erro ao salvar produto', error: e.message });
    }
});


app.post('/api/insert_much_products', async (req, res) => {
    try {
        if (!Array.isArray(req.body)) {
            return res.status(400).send({ message: 'Body precisa ser um array', success: false });
        }

        const names = req.body.map(p => p.name);
        const existing = await Product.find({ name: { $in: names } }).select('name');
        const existingNames = new Set(existing.map(p => p.name));

        const filtered = req.body.filter(p => !existingNames.has(p.name)).map(p => ({
            ...p,
            createdAt: new Date(),
            updatedAt: new Date()
        }));

        if (filtered.length === 0) {
            return res.status(409).send({ message: 'Todos os produtos já existem', success: false });
        }

        await Product.insertMany(filtered);
        res.status(200).send({ message: `${filtered.length} produtos inseridos`, success: true });
    } catch (e) {
        res.status(400).send(e);
    }
});

app.put('/api/update_product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        product.name = req.body.name;
        product.description = req.body.description;
        product.old_price = req.body.old_price;
        product.price = req.body.price;
        product.category = req.body.category;
        product.image = req.body.image;
        product.stock = req.body.stock;
        product.isActive = req.body.isActive;
        product.ratings = req.body.ratings || [];
        product.updatedAt = new Date();
        await product.save();
        res.status(200).send({message: 'Product updated successfully', sucess: true});
    } catch (e) {
        res.status(400).send(e);
    }
})

app.get('/api/products', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  try {
    const isActive = req.query.isActive !== undefined ? req.query.isActive === 'true' : true;
    const products = await Product.find({ isActive }).skip(skip).limit(limit);
    console.log("Produtos encontrados:", products);
    res.status(200).send(products);
  } catch (e) {
    console.log("Erro:", e);
    res.status(400).send(e);
  }
});


app.get('/api/product/:id', async (req, res) => {
    console.log("requisição em produto especifico");
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ error: "ID inválido" });
    }

    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send({ error: "Produto não encontrado" });
        res.status(200).send(product);
    } catch (e) {
        res.status(500).send({ error: "Erro interno", details: e.message });
    }
});

app.get('/api/catch_all_products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.put('/api/like_product/:id', authMiddleware, async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = req.user.id;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).send({ error: "Produto não encontrado" });
    const user = await User.findById(userId);
    if (!user) return res.status(404).send({ error: "Usuário não encontrado" });
    if (user.liked.includes(productId)) {return res.status(400).send({ error: "Produto já está nos favoritos" });}
    user.liked.push(productId);
    await user.save();
    product.likes = (product.likes || 0) + 1;
    await product.save();
    res.status(200).send({ message: "Produto favoritado com sucesso", liked: user.liked });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.put('/api/unlike_product/:id', authMiddleware, async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) return res.status(404).send({ error: "Usuário não encontrado" });
    const index = user.liked.indexOf(productId);
    if (index === -1) return res.status(400).send({ error: "Produto não está nos favoritos" });
    user.liked.splice(index, 1);
    await user.save();
    const product = await Product.findById(productId);
    if (product && product.likes > 0) {product.likes -= 1;await product.save();}
    res.status(200).send({ message: "Produto removido dos favoritos", liked: user.liked });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.get('/api/favorites', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const products = await Product.find({ _id: { $in: user.liked } }).select('_id name image price old_price description');
    res.status(200).send(products);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

app.listen(process.env.PORT, '0.0.0.0', () => {
  console.log(`Server running on https://0.0.0.0:${process.env.PORT}`);
});