import streamlit as st

# Set up the page title and layout
st.set_page_config(page_title="My Finance Portfolio", layout="centered")

# --- HERO SECTION ---
st.title("Hi, I'm Alex 👋")
st.subheader("Financial Analyst & Python Enthusiast")
st.write(
    "Welcome to my portfolio. I use Python to analyze market data, "
    "build financial models, and uncover investment insights."
)

st.write("---")

# --- ABOUT ME SECTION ---
st.header("About Me")
st.write(
    """
    - 📈 Passionate about corporate finance, asset management, and data visualization.
    - 🎓 B.S. in Finance / Economics.
    - 🛠️ Skills: Financial Modeling, Python (Pandas, NumPy), Excel, Tableau.
    """
)

st.write("---")

# --- PROJECTS SECTION ---
st.header("My Finance Projects")

# Project 1
st.subheader("1. Automated Stock DCF Model")
st.write("Built a Discounted Cash Flow (DCF) model that pulls live stock data using the Yahoo Finance API.")
st.markdown("[View Code on GitHub](https://github.com)") # Replace with your link

# Project 2
st.subheader("2. Crypto Portfolio Risk Analyzer")
st.write("A Python script that calculates the Monte Carlo simulation for cryptocurrency portfolios.")
st.markdown("[View Code on GitHub](https://github.com)")

st.write("---")

# --- CONTACT FORM ---
st.header("Get In Touch")
st.write("Feel free to reach out to me via [LinkedIn](https://linkedin.com) or email at alex@example.com.")