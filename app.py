import streamlit as st

# 1. Set up the page title, icon, and wide layout to give your elements breathing room
st.set_page_config(page_title="Belise's Finance Portfolio", page_icon="", layout="wide")

# --- HERO SECTION (Stays pinned at the top across all tabs) ---
st.title("Financial Analysis Portfolio")
st.write("Welcome to my professional workspace.")
st.markdown("---")

# 2. Define your 3 professional tabs
tab1, tab2, tab3 = st.tabs([" Home & About", " Finance Projects", " Get In Touch"])

# ==========================================
# TAB 1: HOME & ABOUT ME
# ==========================================
with tab1:
    # We will use columns to give the layout structure
    col1, col2 = st.columns([2, 1])
    
    with col1:
        st.header("Hi, I'm Belise")
        st.subheader("Student at the Massachusetts Institute of Technology (MIT)")
        
        st.write(
            """
            Welcome to my interactive finance portfolio! I am a passionate student building quantitative and fundamental tools 
            at the intersection of corporate finance, asset management, and technical programming. 
            """
        )
        
        st.info("💡 **Key Focus Areas:** Corporate Finance | Asset Management | Sales & Trading")

        # --- MOVED HERE: Profile summary container block is now under Key Focus Areas ---
        with st.container(border=True):
            st.markdown("### About me")
            st.markdown("**Education:** B.S. in Finance & Mathematics")
            st.markdown("**Institution:** MIT (Class of 2028)")
            st.markdown("**Technical Skills:** Python (Pandas, NumPy), R Programming, Excel, Financial Modeling")

    with col2:
        # This keeps the image isolated in the right-hand column so it stretches cleanly
        st.image("headshot.jpg", use_container_width=True)
# ==========================================
# TAB 2: FINANCE PROJECTS
# ==========================================
with tab2:
    st.header("Academic & Personal Projects")
    st.write("Explore my financial models and analysis below.")
    st.write("---")

    # Project 1 Layout
    p1_col1, p1_col2 = st.columns([3, 1])
    with p1_col1:
        st.subheader("1. Twitter LBO Model")
        st.caption("📅 Feb 2026")
        
        # Using triple quotes lets you break text into multiple lines and use bullet points
        st.write(
            """
            * **Modeled Twitter’s \$44B LBO acquisition**, stress-testing IRR and cash-on-cash returns across exit scenarios under varying DAU growth and ad-revenue margin assumptions with multi-tranche debt structures and revolving credit facilities.
            * **Identified cost-cutting thresholds** necessary to service high-yield debt obligations through sensitivity analysis; assessed deal viability under downside scenarios including user growth stagnation.
            """
        )
    with p1_col2:
        st.write("") # Padding space
        st.write("")
        st.markdown("[📁 View GitHub Repo](https://github.com)") # Replace with your real link

    st.write("---")

    # Project 2 Layout
    p2_col1, p2_col2 = st.columns([3, 1])
    with p2_col1:
        st.subheader("2. Merger Arbitrage Investment Strategy")
        st.write(
            """
            * **Designed and backtested the “ArbiTIM” statistical arbitrage strategy**, across 285 all-cash M&A deals ($500M+) from
2015–2024; constructed a market-neutral portfolio achieving low beta and reduced volatility relative to the S&P 500stress-testing IRR and cash-on-cash returns across exit scenarios under varying DAU growth and ad-revenue margin assumptions with multi-tranche debt structures and revolving credit facilities.
            * **Quantified deal-failure probabilities and modeled regulatory execution risk**,  using R and Bloomberg Terminal; optimized
position sizing based on risk-adjusted return profiles and tail-risk scenarios
            """
        )
    with p2_col2:
        st.write("") # Padding space
        st.write("")
        st.markdown("[📁 View GitHub Repo](https://github.com)") # Replace with your real link

# ==========================================
# TAB 3: CONTACT INFORMATION
# ==========================================
with tab3:
    st.header("Contact")
    st.write("I am always eager to connect regarding internship opportunities, research collaborations, or networking.")
    
    st.success("✅ **Open to Opportunities:** Seeking Summer 2027/2028 opportunities in quantitative finance and banking.")
    
    # Clean contact alignment using decorative block styling
    with st.container(border=True):
        st.markdown("### 📬 Direct Channels")
        st.markdown("📧 **Email:** [belise@mit.edu](mailto:belise@mit.edu)")
        st.markdown("💼 **Professional Network:** [Connect with me on LinkedIn](https://www.linkedin.com/in/belise-swartwood/)")