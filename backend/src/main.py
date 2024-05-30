from fastapi import FastAPI
from src.http_client import CMCHTTPClient
from src.router import router as router_crypto
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [    
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router_crypto)


