db.produtos.find(
    {
        valoresNutricionais: {
            $elemMatch: { tipo: { $eq: "proteínas" }, percentual: { $gte: 30, $lte: 40 } },
        },
    },
    { _id: false, nome: true },
);