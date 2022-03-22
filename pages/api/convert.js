import axios from 'axios';

/** 
Exemplo de body no request:
{
	"nome": "Teste",
	"email": "teste@gmail.com",
	"empresa": "Onfinity",
	"emprego": "Programador"
}
*/

export default function handler(req, res) {
  if (req.method === 'POST') { 
    console.log(req.body);
    if(req.body.nome != "" && req.body.email != "" && req.body.empresa != "" && req.body.emprego != ""){
      let nome = req.body.nome
      let email = req.body.email
      let empresa = req.body.empresa
      let emprego = req.body.emprego
      let tag = "inscricao_congresso"

      axios.post(process.env.RD_API_URL + '/auth/token',{  
        "client_id": process.env.RD_CLIENT_ID,
        "client_secret": process.env.RD_CLIENT_SECRET,
        "refresh_token": process.env.RD_REFRESH_TOKEN
      })
      .then(response => {
        let access_token = response.data.access_token
        let config = {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        }

        axios.post(process.env.RD_API_URL + '/platform/events',{
          "event_type": "CONVERSION",
          "event_family":"CDP",
          "payload": {
            "conversion_identifier": tag,
            "traffic_source": "utm_source",
            "traffic_medium": "Congresso - evento de conversão",
            "traffic_campaign": "utm_campaign",
            "traffic_value ": "utm_term",
            "job_title": emprego,
            "name": nome,
            "email": email,
            "company_name": empresa,
            "tags": ["congresso", "2022"],
            "available_for_mailing": true
          }
        }, config).
        then(formulario => {
          if(formulario.data.hasOwnProperty('event_uuid')){
            res.json({
              success: true,
              message: "Conversão realizada com sucesso!"
            })
          } else {
            res.json({
              success: false,
              message: "Ocorreu um erro durante a conversão"
            })
          }
        })
      });
    } else {
      res.json({
        success: false,
        message: "Por favor, preencha todos os campos"
      })
    }
  } else {
    res.json({
      success: false,
      message: "Metodo não suportado!"
    })
  }
}
  