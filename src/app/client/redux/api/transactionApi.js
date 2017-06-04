import $ from 'jquery'

export const getTransactionData = () => {
  const url = 'http://localhost:3000/api/transactions'

  return $.getJSON(url, {type: 'no-cors'}, response => {
    return response;
  }).then( (data) => {
    return data.transactions;
  })
}
