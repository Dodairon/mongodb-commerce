db.produtos.find(
    { ingredientes: { $eq: "picles" } },
    { _id: false, nome: true, ingredientes: true, valoresNutricionais: { $slice: 3 } },
);