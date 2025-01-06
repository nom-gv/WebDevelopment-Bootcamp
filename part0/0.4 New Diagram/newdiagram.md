```mermaid
sequenceDiagram
    participant Usuario
    participant Servidor

    Usuario->>Servidor: Solicita recurso
    Servidor-->>Usuario: Devuelve recurso
    Usuario->>Servidor: Envía datos
    Servidor-->>Usuario: Confirma recepción
