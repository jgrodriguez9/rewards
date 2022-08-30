//Note: setTimeout is only to show effect of the sprinner
const timeDelay = 1500

export default function get(month) {
    // simulates data coming from a database.
    return new Promise(async (resolve, reject) => {
      if(parseInt(month) === 3){
        try {          
          const response = await fetch("http://localhost:3333/transactions")
          if(!response.ok){
            setTimeout(() => {
              reject(
                  {
                      status: response.status,
                      message: 'Ops error!',
                      data: []
                  }
              )
            }, timeDelay)
          }
          const transaction = await response.json();
          setTimeout(() => {
            resolve(
              {
                status: 200,
                message: 'success',
                data: transaction
              }
            )
          }, timeDelay)
          

        } catch (error) {
          setTimeout(() => {
            reject(
                {
                    status: 500,
                    message: 'Ops error!',
                    data: []
                }
            )
          }, timeDelay)
        }
      }else{
        setTimeout(() => {
          reject(
              {
                  status: 400,
                  message: 'Please enter 3 to show information',
                  data: []
              }
          )
        }, timeDelay)
      }
    })
};