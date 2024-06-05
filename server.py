import uvicorn
from fastapi import FastAPI


app = FastAPI()


@app.get('/saudacao/{nome}')
def home(nome: str):
    texto = f'Olá {nome}, tudo bem?'
    return {"mensagemn":texto}

@app.get("/quadrado/{numero}")
def quadrado(numero: int):
    resultado=numero*numero
    texto=f'O quadrado de d {numero} é {resultado}'
    return {"mensagem": texto}

@app.get("/dobro")
def dobro(numero: int):
    resultado= 2*numero
    return {"Resultado": f"O dobro de {numero} é {resultado}"}


@app.get("/area-retangulo")
def area_retangulo(largura: int, altura: int =2 ):
    area = largura*altura
    
    return {'area': area }

if __name__ == "__main__":
    uvicorn.run(app, port=8000)