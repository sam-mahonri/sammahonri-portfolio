import json
import requests
import os
import time

def baixar_imagem(url, caminho_salvar, tentativas=3, timeout=10):
    for tentativa in range(tentativas):
        try:
            resposta = requests.get(url, timeout=timeout)
            
            if resposta.status_code == 200:
                with open(caminho_salvar, 'wb') as arquivo:
                    arquivo.write(resposta.content)
                print(f"Imagem salva em: {caminho_salvar}")
                return True  # Sucesso
            else:
                print(f"Erro ao baixar a imagem de {url}. Código de status: {resposta.status_code}")
        
        except requests.exceptions.RequestException as e:
            print(f"Tentativa {tentativa + 1} falhou para {url}. Erro: {e}")
        
        # Delay de 1 segundo antes da próxima tentativa
        time.sleep(1)
    
    print(f"Não foi possível baixar a imagem de {url} após {tentativas} tentativas.")
    return False  # Falha após todas as tentativas

def processar_json_e_baixar_imagens(json_path):
    with open(json_path, 'r') as arquivo:
        dados = json.load(arquivo)
    
    diretorio = "backup"
    os.makedirs(diretorio, exist_ok=True)

    for index, item in enumerate(dados):
        img_url = item.get("imgUrl")
        
        if img_url:
            # Extrair o nome da imagem a partir da URL
            nome_arquivo = f"imagem_{index + 1}.jpg"
            caminho_salvar = os.path.join(diretorio, nome_arquivo)
            
            # Tentar baixar a imagem com 3 tentativas e delay de 1 segundo entre operações
            baixar_imagem(img_url, caminho_salvar)
            
            # Delay de 1 segundo entre todas as operações
            time.sleep(1)

json_path = "/home/sammahonri/Área de Trabalho/Sam/sammahonri-portfolio/json/artistic/arts.json"

processar_json_e_baixar_imagens(json_path)
