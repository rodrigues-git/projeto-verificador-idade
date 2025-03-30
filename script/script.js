function verificar(){
    let txtano = document.getElementById('txtano')
    let ano = (txtano.value)
    let agora = new Date()
    let data = agora.getFullYear()

    if(ano.length == 0){
        window.alert('Por favor, insira um ano de nascimento!')
    }

    else if(ano > data ){
        window.alert('Ano inválido!')
    }

    else{

        let idade = data - ano
        let sex = document.getElementsByName('radsex')
        let sexo = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(sex[0].checked){

            sexo = 'homem'

            if( idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/homem-crianca.jpg')
            }

            else if(idade < 21){
                img.setAttribute('src', 'imagens/homem-jovem.jpg')

            }

            else if(idade < 50){
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            }

            else{
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
            }
        }

        else{
            sexo = 'mulher'

            if( idade >= 0 && idade < 10){
                img.setAttribute('src', 'imagens/mulher-crianca.jpg')
            }

            else if(idade < 21){
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            }

            else if(idade < 50){
                img.setAttribute('src', 'imagens/mulher-adulta.jpg')
            }

            else{
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
            }
        }

        let msg = document.getElementById('msg')
        msg.innerText = `Identificamos ${sexo} com ${idade} anos.`
        msg.style.alignSelf = 'center'
        msg.appendChild(img)
        img.style.borderRadius = '50%'
        img.style.width = '50%'
        msg.style.display = 'flex'
        msg.style.flexFlow = 'column nowrap'
        msg.style.alignItems = 'center'
        msg.style.gap = '15px'
        msg.style.width = '100%'
    }

}