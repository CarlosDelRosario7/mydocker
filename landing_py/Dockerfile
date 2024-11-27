FROM python:3.12.7

WORKDIR /app

COPY main.py .
COPY my_email.py .
COPY correo.py .
COPY index.html .
COPY static static

RUN pip install fastapi uvicorn python-dotenv pydantic

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]