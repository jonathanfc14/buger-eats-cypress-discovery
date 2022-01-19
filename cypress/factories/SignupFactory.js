var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '83999999999',
            address: {
                postalcode: '58075630',
                street: 'Rua Armando Afonso Boudoux Júnior',
                number: '376',
                details: '401B',
                district: 'Ernesto Geisel',
                city_state: 'João Pessoa/PB'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }

}