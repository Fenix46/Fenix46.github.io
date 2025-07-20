---
layout: project
title: PolyAgents
description: Sistema multi-agente AI con consenso semantico locale
emoji: 🤖
featured: true
tech:
  - Python
  - React
  - TypeScript
  - PostgreSQL
  - Redis
  - Qdrant
  - Docker
category: AI/ML
status: active
---

## Panoramica

PolyAgents è un sistema multi-agente AI che prende il prompt dell'utente e lo elabora attraverso 3 agenti cloud (Gemini) che analizzano e ragionano tra loro. Una IA locale (Qwen2-0.6B) prende queste risposte, le fonde e crea un consenso semantico, riassumendo e fornendo una risposta unica e coerente.

## Caratteristiche Principali

- **Multi-Agent Cloud**: 3 agenti Gemini che analizzano e ragionano
- **Consenso Semantico**: IA locale Qwen2-0.6B per fusione risposte
- **Interfaccia Web**: Dashboard React per interazione utente
- **Vector Database**: Qdrant per gestione embeddings
- **Containerizzazione**: Deployment Docker per facilità di distribuzione

## Tecnologie Utilizzate

### Backend
- **Python**: Linguaggio principale per gli agenti
- **Uvicorn**: Server ASGI per FastAPI
- **FastAPI**: API REST per l'interfaccia web
- **PostgreSQL**: Database relazionale per la persistenza
- **Redis**: Cache e comunicazione tra agenti
- **Qdrant**: Vector database per embeddings

### Frontend
- **React**: Framework per l'interfaccia utente
- **TypeScript**: Tipizzazione statica per maggiore robustezza
- **Vite**: Build tool e development server

### AI/ML
- **Gemini API**: Agenti cloud per analisi
- **Qwen2-0.6B**: IA locale per consenso semantico
- **Vector Embeddings**: Gestione semantica delle risposte

### DevOps
- **Docker**: Containerizzazione dell'applicazione

## Architettura del Sistema

Il sistema è composto da diversi componenti:

1. **Agenti Cloud (Gemini)**: 3 agenti che analizzano il prompt e ragionano tra loro
2. **IA Locale (Qwen2-0.6B)**: Prende le risposte degli agenti e crea un consenso semantico
3. **Vector Database (Qdrant)**: Gestisce gli embeddings per la semantica
4. **API Gateway**: Coordina la comunicazione tra tutti i componenti

## Sfide e Soluzioni

### Consenso Semantico
- Fusione di risposte multiple in una risposta coerente
- Gestione di contraddizioni tra agenti
- Ottimizzazione della qualità della risposta finale

### Performance
- Gestione efficiente delle chiamate API cloud
- Ottimizzazione dell'IA locale per velocità
- Caching intelligente delle risposte

## Risultati

- **Qualità Risposte**: Miglioramento significativo grazie al consenso semantico
- **Efficienza**: Riduzione del tempo di elaborazione
- **Affidabilità**: Sistema robusto con fallback su IA locale
- **Flessibilità**: Architettura modulare per nuovi agenti

## Prossimi Sviluppi

- Integrazione con altri modelli AI cloud
- Ottimizzazione dell'IA locale per performance
- Interfaccia avanzata per configurazione agenti
- Analytics per monitoraggio qualità risposte 