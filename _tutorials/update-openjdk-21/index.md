---
layout: tutorial
title: Instalação do OpenJDK 21 no Debian
description: Guia completo para instalação e configuração do OpenJDK 21 em sistemas Debian Linux
date: 2024-03-08
author: Lincoln Lopes
tags: 
  - java
  - debian
  - linux
  - openjdk
difficulty: intermediário
time_to_read: 10
toc: true
categories:
  - desenvolvimento
  - linux
---

# Instalação do OpenJDK 21 no Debian

## Pré-requisitos

* Sistema operacional Debian Linux
* Conexão com a internet para download
* Permissões de superusuário (sudo)
* Arquivo .tar.gz do OpenJDK 21 correspondente à sua arquitetura

## Passos de Instalação

### 1. Download do Arquivo Binário

Primeiro, precisamos baixar o arquivo .tar.gz do OpenJDK 21. Para sistemas x64 (mais comum):

```bash
wget https://download.java.net/java/GA/jdk21.0.2/f2283984656d49d69e91c558476027ac/13/GPL/openjdk-21.0.2_linux-x64_bin.tar.gz
```
Outras versões podem ser obtidas em [Archived OpenJDK GA Releases](https://jdk.java.net/archive/).

### 2. Extração do Arquivo

Extrair o conteúdo do arquivo .tar.gz:

##### Observações

* Outras localizações comuns quanto a escolha da instalação:
`/usr/local/lib/java`
`/usr/lib/jdk`

```bash
sudo tar -xvzf openjdk-21.0.2_linux-x64_bin.tar.gz -C /usr/lib/jdk
```

### 3. Movendo para o Diretório Correto

Mova o diretório extraído para /usr/local/ com permissões de superusuário:

```bash
sudo mv /usr/lib/jdk/jdk-21.0.2/ /usr/lib/jdk/jdk-21/
```

### 4. Aplicando as Alterações
Adicione o Java ao sistema de alternativas:

```bash
sudo update-alternatives --install "/usr/bin/java" "java" "/usr/lib/jdk/jdk-21/bin/java" 0
sudo update-alternatives --install "/usr/bin/javac" "javac" "/usr/lib/jdk/jdk-21/bin/javac" 0
sudo update-alternatives --install "/usr/bin/jar" "jar" "/usr/lib/jdk/jdk-21/bin/jar" 0
```

```bash
sudo update-alternatives --list java
sudo update-alternatives --list javac
```

### 5. Gerenciando Versões com update-alternatives

Para gerenciar diferentes versões do Java:

```bash
# Listar todas as versões instaladas
update-alternatives --list java

# Selecionar a versão padrão
sudo update-alternatives --config java
```

Você verá uma tela como esta:

```bash
Escolha a alternativa java:
  1    /usr/lib/jdk/jdk-12/bin/java
  2    /usr/lib/jdk/jdk-17/bin/java
  3    /usr/lib/jdk/jdk-21/bin/java

Digite o número da escolha [1-3]:
```

### 6. Verificando a Instalação

Confirme se a instalação foi bem-sucedida:

```bash
java --version
```

## Desinstalação

Se precisar remover o OpenJDK posteriormente:

```bash
# Remover as alternativas
sudo update-alternatives --remove java /usr/lib/jdk/jdk-21/bin/java
sudo update-alternatives --remove javac /usr/lib/jdk/jdk-21/bin/javac
sudo update-alternatives --remove jar /usr/lib/jdk/jdk-21/bin/jar

# Remover o diretório de instalação
sudo rm -rf /usr/local/jdk-21
```

## Observações Importantes

* O update-alternatives gerencia automaticamente as variáveis de ambiente (JAVA_HOME e PATH)
* Não é necessário criar arquivos em /etc/profile.d/
* O sistema mantém todas as configurações consistentes
* Facilita a mudança entre diferentes versões do Java
* O diretório de instalação padrão será `/usr/lib/jdk/jdk-21` 
* Para sistemas ARM64, baixe a versão correspondente do arquivo .tar.gz
* Este método não requer reinicialização do sistema após a instalação

