export default function handler(req, res) {

  if (req.method === 'POST') {
    console.log(req.body)
    res.json({
      success: true,
      message: "Conversão realizada com sucesso!"
    })
  } else {
    res.json({
      success: false,
      message: "Metodo não suportado!"
    })
  }
}
  