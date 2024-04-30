FROM python:3.11.9
ENV  PYTHONUNBUFFERED 1
WORKDIR /ObesityCheck/backend
COPY requirements.txt /ObesityCheck/backend
RUN pip install --no-cache-dir -r requirements.txt
COPY . /ObesityCheck/backend
EXPOSE 8000