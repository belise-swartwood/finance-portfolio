import streamlit as st

# Set up the page title and layout
st.set_page_config(page_title="My Finance Portfolio", layout="centered")

# --- HERO SECTION ---
st.title("Hi, I'm Belise")
st.subheader("Student at MIT")
st.write(
    "Welcome to my portfolio."
)

st.write("---")

# --- ABOUT ME SECTION ---
st.header("About Me")
st.write(
    """
    - B.S. in Finance & Mathematics at MIT
    - Class of 2028
    - Passionate about corporate finance, asset management, and sales & trading.
    -  Skills: Financial Modeling, Python (Pandas, NumPy), RStudio, Excel.
    """
)

st.write("---")

# --- PROJECTS SECTION ---
st.header("My Finance Projects")

# Project 1
st.subheader("1. Merger Arbitrage Investment Strategy")
st.write("Built a Discounted Cash Flow (DCF) model that pulls live stock data using the Yahoo Finance API.")
st.markdown("[View Code on GitHub](https://github.com)") # Replace with your link

# Project 2
st.subheader("2. TWitter LBO Model")
st.write("A Python script that calculates the Monte Carlo simulation for cryptocurrency portfolios.")
st.markdown("[View Code on GitHub](https://github.com)")

st.write("---")

# --- CONTACT FORM ---
st.header("Get In Touch")
st.write("Feel free to reach out to me via [LinkedIn](https://linkedin.com) or email at belise@mit.edu.")