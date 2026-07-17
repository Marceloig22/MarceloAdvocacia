# Marcelo Igor — Advocacia (Landing Page)

Landing page em **React + Vite**, pronta para hospedagem na **Vercel**.

## Estrutura

- `src/data.js` — **todo o conteúdo editável** (WhatsApp, e-mail, OAB, endereço, textos dos serviços, FAQ). Para atualizar o site, edite este arquivo.
- `src/components/` — componentes das seções da página
- `src/index.css` — estilos globais (paleta vinho e dourado)

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:5173

## Publicar na Vercel

**Opção 1 — pelo site (recomendada):**
1. Crie um repositório no GitHub e envie este projeto
2. Acesse https://vercel.com, faça login com o GitHub
3. Clique em **Add New → Project**, importe o repositório
4. A Vercel detecta o Vite automaticamente — clique em **Deploy**

**Opção 2 — pela linha de comando:**
```bash
npm install -g vercel
vercel
```

Cada `git push` na branch principal gera um novo deploy automático.

## Pendências

- Substituir o espaço reservado da foto na seção "Sobre" por uma foto profissional (adicionar em `public/` e usar `<img>` no componente `Sobre`)
