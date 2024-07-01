import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM inscricoes";

    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.status(200).json(data);
    });
};

export const addInscricao = (data, res) => {
    const q = 

    "INSERT INTO inscricoes(`nome`, `email`, `fone`, `nacimento`) VALUES(?)";

    const values = [
        data.body.nome,
        data.body.email,
        data.body.fone,
        data.body.nacimento,
    ];
    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("inscrição realizada com sucesso.")
    });
};