const { default: axios } = require('axios');

const queries =  require('./queries')

const requesting= ()=>{

    const launchingRequest = (query)=>axios.post('https://api.sorare.com/graphql', {
        Host: 'api.sorare.com',
        'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:88.0) Gecko/20100101 Firefox/88.0',
        Accept: 'application/json',
        'Accept-Language': 'fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3',
        'Accept-Encoding': 'gzip, deflate, br',
        Referer: 'https://sorare.com/market/new_signings?refinementList[sale.bundled][0]=false',
        'content-type': 'application/json',
        'Seon-Session': 'Web;73d384df-baf5-4899-a0f1-b4d5cca7bdea;HQ+et0mqeAFXTuOhyZY+Jg==;YoShBmmuZVULBMEZcSPQE2pTbbrYRjip359dhxBrDJfYBU12aulsrKQ38XxBGHVf+ZPFIHRwyKKQdmeYrFYyXohKwi2JXSHS+4zjnQvmvD06r9Oov4g7+fdevjM1spOWz/yLuVXN/9ezYSnOkRZ94E2jHtpqz9uoFfXyY5SpdTPhKeTm3cwCMbOMKhqVycAReb8ukAQTeSRQvcB6LRgMpwJChV6qlZ+5w9BZMH5DBLfT462tTKfqBPSfxx/O/kES4i1uMbaNyyU1E1FF9tMm/qkaJ+/jpF3ImhkompEhEBSseH3UHVDO/V8Ex8HMAbI+XSp+4McuZkSHhcD18YnxcTZH0JH9IoEyjEmZB8L7VLVCHNnTVGNziwx3uWVDr/i4j9izSzy3r9gkcHZzxpiBE+yNOH4f/gyyCS9hncnjiODSgSWr+pVMht0ZBLQi0z1UOiiUBXTXdg3vKiIYh59lSVBESI/r/nlCyiwQLkp0oPLO1yl522NK0UdE+MCJdi1RAB632D/TlsIwJI7nNJIj+v1F0U0FolpcCIBMZ/qZocI16PHq/WbHjhOCLabTAHFE3RS2ViXvdmZzFhna9OvvQFoM14Qnuf4zqojrnNh/jQSDZAQJrWb68Utovv8Ocae8nxYR6azlSnCG+at/sW2569g8FcuoiZm5IAGl00868OYSNVQOaPZ883kvNgXS0mKrAhCKDXqznh1JJYoQNFIezARZkEIHzkIc53fUX+hZ5OXXOX35J30Lzp+9p8fD0yOdGJKbJcZyShp2w56wnXVLrV/d5klFEXYp72kQJVzxZntM/g3gTYonhvoUL6zzri7n/0wtq7qWvtaR+xzJ8f1LiPI+wCKBKR65vneXbB5EhBNa12Jc9l9RXheNBgHU8E/6ryrvKlF4PTl2Q+BWN6qn/pHtwoSuTZs3rReO7HvEtc4+eix/0JGu/0QVaKXkzzNMoOqNo4tV4FTDLgz4dFYMFPq4UgHKyCHDBJ5sD7fQrxDixdDm/tEsXOZk9VpKq3r3KP2busItW8TV6GVoRb3IRbhS/s9XjVzhrV0pRvc5wAj+VLMbbd653gaWgqC4H3eYd/5eX8Ytf0NQSGnxfQpV+UzXrN6R0pkUfbVZjSlQYbWXb55RG8JHQPOJraUIcR1A3LJFbivNbsXdZbPPvXPqEdyCtkLjmaWXNKO62Ztd+qL8zYAwKy4+lFXXkDhIZwX/XceDClqTt+WjfhxHxuxXNLKXnr7yn64zMHxbi4QThA8rFQgKj3MrKgW1ejYCk5CNjX+an4UfR/Ujcs6uHAU7pjjjRLFKk3rHAgRkFCDKvP3xIeGQCem9WkmXX1HR5FADMGZOwaWohXL69vJqmoiMXBmJynF/PEdo2j8763lW7xQxGQFGN/Cn9Ocd3/IPhJDsV9B8TZ/mxrSdzogyKtNbqq/D95nsO2EtGkaMUCB9WpcrAFLylDyeB4Kqi5yjGbMBRBYLMykVdnj11F480kORH5QwZTPiCKDPu+W4q3BzKYG02NBCqBGdxcnNjiVlluIviXpW0G1YPRLtxFKBfM09socI7SyIolkb3se+2lubuBtrczVkOAVlXj/usApDblZM7ANaFaaP9IkeoFVPVN8HypHk96Utp9y6VnPy4u7vLnN7j7yMZVNQ9MxAtFnwjVZ8FmNtab8OFnws5O1drUko+EY9gz/5tXFlS+ceU0k/Y1xBtux0SWyzxv+iYtkd8x/Vpx0lbiQwgk/OtDZp4iHeDwmrFW+baNZW35yEz/fqA+UytaUDfpeoeJ1/iqBhO1CvSW9R4Rs45drYaqvT0tYtcuEnsLaNegv/QG/SrB02IlccZW5D5Zjx8ZO7tA+Q8b5VGGe6ZXDdMWj7bj7cZlg+79axZrFYnrXzfIfHZV5VGsjT8eKJLizcemXRRxsswh76',
        Origin: 'https://sorare.com',
        'Content-Length': 4534,
        Connection: 'keep-alive',
        //Cookie: '_ga_1DHGT9FK62=GS1.1.1620736135.2.1.1620736275.0; _ga=GA1.1.1313764726.1620733264; _sorare_session_id=3LGvh5AgTT%2Bhdk5nGoBVyA7KqUBgO0YggHuys9y%2Bklt%2BlfPzgD9MieS3GigXmjFypEY5WY%2BHWqvhsbIqvrS3EM9hHVeX7tiMyYlad%2FUW7aUpHmLdNafIAINKdK4fsquMpMUC0Ex1l6MeXWtx50Nnb6w6Eqyk3uk7B2E%2B3PCi%2FYE4hxMb3T90wcbJEGulMcVyLe%2FbmqSm8%2B4Arlt83p%2FmoxvmShhYwjvOyFRLXaYaj0NJ%2FL8zwXSkbu1%2BI7ZtW1i1J1Z8WqOlIuEIpFIKgFiWjJr0WaOi4QP1r4miKyBQBjrBwlr9LJkOPZ%2Fps8KJWMuqzr2z6h16BOzZK6M47gSyMLRMQcNKKkNiuVcH2ZhzSD6fyUzz1PEIxYBXJQjSmJ2CGbD7vpeWX4IQCs4kdWMdz6Brqpl2%2BaEjqhHxlPZdgEI8WVqU%2BCXmhCWj0kMgAqxa1%2BOt7fMJ69f5jkOLSXQzlE9QBQ8DEWRIQjLSz8PnUabtIQro8oJv%2FiMn8m7kRxNMuII4jICImotHSLMOcEJ8Ps6RJI45%2Bs%2FlIPAOh2Gc0vNP2%2FSXvycDXiXX--gxy4X3HlGdtrSSU3--aNmsKfeTGF0WKAjUm8d25Q%3D%3D; _gid=GA1.2.189912096.1620733264; amplitude_idundefinedsorare.com=eyJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOm51bGwsImxhc3RFdmVudFRpbWUiOm51bGwsImV2ZW50SWQiOjAsImlkZW50aWZ5SWQiOjAsInNlcXVlbmNlTnVtYmVyIjowfQ==; amplitude_id_344e75d91d2c6d4a2f468ec9c6b7abecsorare.com=eyJkZXZpY2VJZCI6ImJiMjZjMzY2LTgwMjYtNDQ0NS1hNjBiLWEwNGRlMzZmYzFiZVIiLCJ1c2VySWQiOiI3M2QzODRkZi1iYWY1LTQ4OTktYTBmMS1iNGQ1Y2NhN2JkZWEiLCJvcHRPdXQiOmZhbHNlLCJzZXNzaW9uSWQiOjE2MjA3MzYxMzc3MzQsImxhc3RFdmVudFRpbWUiOjE2MjA3MzYyNzY3MDgsImV2ZW50SWQiOjQsImlkZW50aWZ5SWQiOjcsInNlcXVlbmNlTnVtYmVyIjoxMX0=; _hjid=9b4941eb-c99f-448a-a6c4-bc130c06e9d2; _hjFirstSeen=1; _hjAbsoluteSessionInProgress=0; ajs_user_id=%2273d384df-baf5-4899-a0f1-b4d5cca7bdea%22; _gat=1; ajs_anonymous_id=%22dc1aed80-9d91-4cad-8902-3df7b9a3bdfa%22',
TE: 'Trailers',
'X-CSRF-Token': "6NnKki65+yktNwN80/kKA9zBlcb1juvnHCvOXWnmjlI9gZe4APisoTEpp4cO8vLmywKynh5vRikTXdngzOuNgA=="
,"query":query.query,
}
)
.then(x=>console.log(query.operationName,'*****', x.data))
.catch(y=>console.log(y))

//launchingRequest(queries.configQuery)
launchingRequest(queries.IngameNotificationQuery)
launchingRequest(queries.cardsQuery)
;
}

module.exports = requesting
