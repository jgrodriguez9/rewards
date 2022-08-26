

export default function getInformation(month) {
    // simulates data coming from a database.
    return new Promise(( resolve, reject ) => {
        if(parseInt(month) === 3) {
            setTimeout(() => {
                resolve(
                    {
                        status: 200,
                        message: 'success',
                        data: [
                            {
                              custid: 1,
                              name: "Jhon Yong",
                              amount: 120,
                              transactionDt: "05-01-2019"
                            },
                            {
                              custid: 1,
                              name: "Jhon Yong",
                              amount: 75,
                              transactionDt: "05-21-2019"
                            },
                            {
                              custid: 1,
                              name: "Jhon Yong",
                              amount: 94,
                              transactionDt: "05-21-2019"
                            },
                            {
                              custid: 1,
                              name: "Jhon Yong",
                              amount: 10,
                              transactionDt: "06-01-2019"
                            },
                            {
                              custid: 1,
                              name: "Jhon Yong",
                              amount: 75,
                              transactionDt: "06-21-2019"
                            },
                            {
                              custid: 1,
                              name: "Jhon Yong",
                              amount: 200,
                              transactionDt: "07-01-2019"
                            },
                            {
                              custid: 1,
                              name: "Jhon Yong",
                              amount: 1,
                              transactionDt: "07-04-2019"
                            },
                            {
                              custid: 1,
                              name: "Jhon Yong",
                              amount: 80,
                              transactionDt: "07-03-2019"
                            },
                            {
                              custid: 1,
                              name: "Jhon Yong",
                              amount: 224,
                              transactionDt: "07-21-2019"
                            },
                            {
                              custid: 2,
                              name: "Alex Morgan",
                              amount: 125,
                              transactionDt: "05-01-2019"
                            },
                            {
                              custid: 2,
                              name: "Alex Morgan",
                              amount: 75,
                              transactionDt: "05-21-2019"
                            },
                            {
                              custid: 2,
                              name: "Alex Morgan",
                              amount: 10,
                              transactionDt: "06-01-2019"
                            },
                            {
                              custid: 2,
                              name: "Alex Morgan",
                              amount: 75,
                              transactionDt: "06-21-2019"
                            },
                            {
                              custid: 2,
                              name: "Alex Morgan",
                              amount: 200,
                              transactionDt: "07-01-2019"
                            },
                            {
                              custid: 2,
                              name: "Alex Morgan",
                              amount: 224,
                              transactionDt: "07-21-2019"
                            },
                            {
                              custid: 3,
                              name: "Sallys Startup",
                              amount: 120,
                              transactionDt: "06-21-2019"
                            }
                        ]
                    }
                )
            }, 2000)
            
        }else{

            setTimeout(() => {
                reject(
                    {
                        status: 400,
                        message: 'Please enter 3 to show information',
                        data: []
                    }
                )
            }, 2000)
            
        }
        
    });
  };