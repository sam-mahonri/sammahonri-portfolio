#!/bin/bash

# Diretório contendo os arquivos
DIR="./arts"

# Contador para o novo nome
counter=1

# Ordena os arquivos por data de criação e os renomeia
for file in $(ls -lt --time=ctime --reverse "$DIR" | awk '{print $9}' | grep -v '^$'); do
  # Verifica se é um arquivo
  if [ -f "$file" ]; then
    # Renomeia o arquivo com base no contador
    mv "$file" "${DIR}/file_$counter"
    counter=$((counter + 1))
  fi
done

