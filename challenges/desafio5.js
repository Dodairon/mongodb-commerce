db.produtos.find(
    { $or: [{ curtidas: { $eq: 36 } }, { vendidos: { $eq: 85 } }] },
    { nome: true, _id: false, curtidas: true, vendidos: true },
);
