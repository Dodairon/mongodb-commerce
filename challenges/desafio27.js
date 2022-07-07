db.produtos.find({ nome: /Mc/i }, { _id: false, nome: true }).count();
