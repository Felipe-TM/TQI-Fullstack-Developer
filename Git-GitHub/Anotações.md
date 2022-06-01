# GIT 

O GIT é uma ferramenta de versionamento de código distribuído.

É composto por:

- Blobs
- Trees
- Commits



### Comandos

 Para gerar chave *ssh*:

```
ssh-keygen -t ed25519 -C {Seu e-mail}
```



Para Iniciar um repositório a partir de um diretório local:

```
git init
```



Para saber o *status* do repositório:

```
git status
```



Para preparar os arquivos para realizar o commit, ou seja colocar-los no estado *staged*:

```
git add {nome do arquivo}
```

ou para fazer essa operação para todos os arquivos:

```
git add *
```



Para realizar um commit:

```
git commit -m "{sua mensagem aqui}"
```



### Integrando um repositório local ao GitHub: 



>Antes de integrar um repositório local, é importante verificar se as informações das
>
>variáveis ***user.email*** e ***user.name*** correspondem ao e-mail e o usuário no GitHub.
>
>
>
>>Isso pode ser feito através do comando:
>>```
>>git config --list
>>```
>>Para alterar, primeiro remova as informações antigas com os comandos:
>>```
>>git config --global --unset user.email
>>```
>>```
>>git config --global --unset user.name
>>```
>>por fim coloque as informações corretas com os comandos:
>>```
>>	git config --global user.email {Seu e-mail}
>>```
>>```
>>git config --global user.name {Seu usuário no GitHub}
>>```





Para integrar um repositório local ao GitHub use:

```
git remote add origin {URL do repositório}
```

tendo feito isso use o comando *push* para enviar o repositório local ao GitHub:

```
git push origin master
```



Quando o repositório local estiver desatualizado use o comando *pull*:

```
git pull origin master 
```

