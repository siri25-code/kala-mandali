import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addproduct.css";
import { generateProductDetails } from "./ai";
import { useLanguage } from "../LanguageContext";
import { translations } from "../languages";
const categories = [
  { name: "Pottery", icon: "🏺" },
  { name: "Paintings", icon: "🎨" },
  { name: "Textiles", icon: "🧵" },
  { name: "Wood Crafts", icon: "🪵" },
  { name: "Jewelry", icon: "💍" },
  { name: "Handicrafts", icon: "🧺" },
];

function Addproduct() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const { language, setLanguage } = useLanguage();

const t = translations[language];
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

const [loadingText, setLoadingText] = useState(
  "🔍 Identifying Product..."
);
  const [product, setProduct] = useState({
    name: "Handmade Terracotta Pot",
    description:
      "Traditional handmade terracotta pot crafted by skilled artisans. Perfect for home decor and gifting.",
    price: "₹600 - ₹800",
    category: "Pottery",
  });

  const [published, setPublished] = useState(false);

  // -----------------------------
  // IMAGE UPLOAD
  // -----------------------------
  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setSelectedImage(file);

    const imageURL = URL.createObjectURL(file);
    setPreviewImage(imageURL);

    setStep(2);
  };

  // -----------------------------
  // CAMERA
  // -----------------------------
  const openCamera = () => {
    document.getElementById("product-camera-input").click();
  };
const speakText = (text) => {
  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(text);

  speech.lang = "en-IN";

  window.speechSynthesis.speak(speech);
};

const startVoiceInputName = () => {
  const recognition =
    new window.webkitSpeechRecognition();

  recognition.lang = "en-IN";

  recognition.start();

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;

    setProduct((prev) => ({
      ...prev,
      name: text,
    }));
  };
};

const startVoiceInputDescription = () => {
  const recognition =
    new window.webkitSpeechRecognition();

  recognition.lang = "en-IN";

  recognition.start();

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;

    setProduct((prev) => ({
      ...prev,
      description: text,
    }));
  };
};

const startVoiceInputPrice = () => {
  const recognition =
    new window.webkitSpeechRecognition();

  recognition.lang = "en-IN";

  recognition.start();

  recognition.onresult = (event) => {
    const text = event.results[0][0].transcript;

    setProduct((prev) => ({
      ...prev,
      price: text,
    }));
  };
};
  // -----------------------------
  // AI STUDIO
  // -----------------------------
 const useAIPhoto = async () => {
  try {
    const file = selectedImage;

    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = async () => {
      try {
        const base64 = reader.result.split(",")[1];

        setLoading(true);
        setProgress(10);
        setLoadingText("🔍 Identifying Product...");

       const loadingSteps = [
  { progress: 15, text: "🔍 Identifying Product..." },
  { progress: 30, text: "🎨 Detecting Craft Category..." },
  { progress: 45, text: "📝 Creating Product Name..." },
  { progress: 60, text: "📖 Writing Description..." },
  { progress: 75, text: "💰 Estimating Price Range..." },
  { progress: 90, text: "✨ Finalizing Details..." },
];

let stepIndex = 0;

const progressTimer = setInterval(() => {
  if (stepIndex < loadingSteps.length) {
    setProgress(loadingSteps[stepIndex].progress);
    setLoadingText(loadingSteps[stepIndex].text);
    stepIndex++;
  }
}, 1200);
        const aiResponse = await generateProductDetails(base64);

        console.log(aiResponse);

        const name =
          aiResponse.match(/Name:\s*(.*)/)?.[1] || "";

        const category =
          aiResponse.match(/Category:\s*(.*)/)?.[1] || "";

        const description =
          aiResponse.match(/Description:\s*(.*)/)?.[1] || "";

        const price =
          aiResponse.match(/Price:\s*(.*)/)?.[1] || "";

        setProduct({
          name,
          description,
          price,
          category,
        });

        clearInterval(progressTimer);

        setProgress(100);
        setLoadingText("✅ Done");

        setTimeout(() => {
          setLoading(false);
          setStep(3);
        }, 500);

      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

  } catch (error) {
    setLoading(false);
    console.error(error);
  }
};

  // -----------------------------
  // CATEGORY
  // -----------------------------
  const selectCategory = (category) => {
    setProduct({
      ...product,
      category,
    });
  };

  // -----------------------------
  // PUBLISH PRODUCT
  // -----------------------------
  const publishProduct = () => {
    const newProduct = {
      id: Date.now(),
      ...product,
      image: previewImage,
      publishedAt: new Date().toISOString(),
      status: "Published",
    };

    const existingProducts =
      JSON.parse(localStorage.getItem("kalaProducts")) || [];

    localStorage.setItem(
      "kalaProducts",
      JSON.stringify([...existingProducts, newProduct])
    );

    setPublished(true);
    setStep(4);
  };

  // -----------------------------
  // BACK
  // -----------------------------
  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate("/dashboard");
    }
  };

  // -----------------------------
  // RESET
  // -----------------------------
  const addAnotherProduct = () => {
    setStep(1);
    setSelectedImage(null);
    setPreviewImage(null);
    setPublished(false);

    setProduct({
      name: "Handmade Terracotta Pot",
      description:
        "Traditional handmade terracotta pot crafted by skilled artisans. Perfect for home decor and gifting.",
      price: "₹600 - ₹800",
      category: "Pottery",
    });
  };

  return (
    <div className="kp-add-page">

      {/* ================= HEADER ================= */}
      {/* ================= HEADER ================= */}
<header className="kp-add-header">

  <div
    className="kp-brand"
    onClick={() => navigate("/dashboard")}
  >
    <img
      src="/src/assets/logo.png"
      alt="Kala Mandali Logo"
    />

    <div>
      <h2>t.Kala Mandali</h2>
      <p>Our Art.. Our Pride</p>
    </div>
  </div>

  <div className="kp-header-actions">

   <select
  value={language}
  onChange={(e) => setLanguage(e.target.value)}
>
  <option value="en">English</option>
  <option value="te">Telugu</option>
  <option value="hi">Hindi</option>
</select>

    <button className="kp-sound-btn">
      🔊
    </button>

  </div>

</header>
      

      {/* ================= PROGRESS ================= */}
      <div className="kp-progress">

        <div className={step >= 1 ? "active" : ""}>
          <span>1</span>
          <p>Add Product</p>
        </div>

        <div className="kp-line"></div>

        <div className={step >= 2 ? "active" : ""}>
          <span>2</span>
          <p>AI Studio</p>
        </div>

        <div className="kp-line"></div>

        <div className={step >= 3 ? "active" : ""}>
          <span>3</span>
          <p>Product Details</p>
        </div>

        <div className="kp-line"></div>

        <div className={step >= 4 ? "active" : ""}>
          <span>4</span>
          <p>Preview & Publish</p>
        </div>

      </div>


      {/* ================= MAIN ================= */}
      <main className="kp-add-main">

        {/* =====================================
            STEP 1
        ====================================== */}
        {step === 1 && (
          <section className="kp-step-container">

            <h1>Add Product</h1>

            <p className="kp-subtitle">
              Let's add your beautiful creation
              <br />
              to the world
            </p>

            <div className="kp-upload-card">

              <div className="kp-camera-circle">
                📷
              </div>

              <h2>Take Photo</h2>

              <p>or</p>

              <label className="kp-gallery-button">
                🖼️ Upload from Gallery

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  hidden
                />
              </label>

              <input
                id="product-camera-input"
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleImageUpload}
                hidden
              />

              <button
                className="kp-camera-button"
                onClick={openCamera}
              >
                📷 Take Photo
              </button>

            </div>

            <div className="kp-tip-box">
              <span>💡</span>

              <p>
                Clear photos help in better
                <br />
                AI suggestions and more sales
              </p>
            </div>

          </section>
        )}


        {/* =====================================
            STEP 2 - AI STUDIO
        ====================================== */}
        {step === 2 && (
          <section className="kp-step-container kp-ai-step">

            <h1>AI Studio</h1>

            <p className="kp-subtitle">
              AI analyzes your product and generates details
            </p>

            <div className="kp-photo-comparison">

              <div className="kp-photo-box">

                <h3>Original Photo</h3>

                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Original product"
                  />
                ) : (
                  <div className="kp-no-image">
                    🏺
                  </div>
                )}

              </div>


              <div className="kp-arrow">
                →
              </div>


              <div className="kp-photo-box">

                <h3>AI Enhanced Photo</h3>

                {previewImage ? (
                  <div className="kp-enhanced-wrapper">

                    <img
                      src={previewImage}
                      alt="AI enhanced product"
                    />

                    <span>✨</span>

                  </div>
                ) : (
                  <div className="kp-no-image">
                    🏺
                  </div>
                )}

              </div>

            </div>


     {loading ? (
  <div className="kp-loading-box">

    <h3>{loadingText}</h3>

    <div className="kp-progress-bar">

      <div
        className="kp-progress-fill"
        style={{ width: `${progress}%` }}
      ></div>

    </div>

    <p>{progress}%</p>

  </div>
) : (
 <button
  className="kp-primary-button"
  onClick={useAIPhoto}
>
  Generate AI Details
</button>
)}


            <div className="kp-tip-box">
              <span>✨</span>

              <p>
                AI improves lighting, removes background
                <br />
                and makes your product look perfect.
              </p>
            </div>

          </section>
        )}


        {/* =====================================
            STEP 3 - PRODUCT DETAILS
        ====================================== */}
        {step === 3 && (
          <section className="kp-step-container kp-details-step">

         <h1>{t.addProduct}</h1>

            <p className="kp-subtitle">
              AI generates details for you
            </p>


            <div className="kp-details-card">

              {/* NAME */}
              <div className="kp-field">

                <label>
                  Product Name <span>(AI Suggested)</span>
                </label>

                <div className="kp-input-with-icon">

                  <input
                    value={product.name}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        name: e.target.value,
                      })
                    }
                  />

   <button
  onClick={startVoiceInputName}
>
  🎤
</button>
<button
  onClick={() => speakText(product.name)}
>
  🔊
</button>

                </div>

              </div>


              {/* DESCRIPTION */}
              <div className="kp-field">

                <label>
                  Description <span>(AI Suggested)</span>
                </label>

                <div className="kp-input-with-icon">

                  <textarea
                    value={product.description}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        description: e.target.value,
                      })
                    }
                  />
<button
  onClick={startVoiceInputDescription}
>
  🎤
</button>

<button
  onClick={() => speakText(product.description)}
>
  🔊
</button>

                </div>

              </div>


              {/* PRICE */}
              <div className="kp-field">

                <label>
                  Price Range <span>(AI Suggested)</span>
                </label>

                <div className="kp-input-with-icon">

                  <input
                    value={product.price}
                    onChange={(e) =>
                      setProduct({
                        ...product,
                        price: e.target.value,
                      })
                    }
                  />
<button
  onClick={startVoiceInputPrice}
>
  🎤
</button>

<button
  onClick={() => speakText(product.price)}
>
  🔊
</button>
                </div>

              </div>


              {/* CATEGORY */}
              <div className="kp-category-section">

                <label>Category</label>

                <div className="kp-category-grid">

                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className={
                        product.category === category.name
                          ? "selected"
                          : ""
                      }
                      onClick={() =>
                        selectCategory(category.name)
                      }
                    >
                      <span>{category.icon}</span>
                      {category.name}
                    </button>
                  ))}

                </div>

              </div>


              <div className="kp-details-actions">

                <button
                  className="kp-secondary-button"
                  onClick={() => setStep(2)}
                >
                  ✏️ Edit Manually
                </button>

                <button
                  className="kp-primary-button"
                  onClick={() => setStep(4)}
                >
                  Accept AI Suggestions
                </button>

              </div>

            </div>

          </section>
        )}


        {/* =====================================
            STEP 4 - PREVIEW
        ====================================== */}
        {step === 4 && (
          <section className="kp-step-container">

            <h1>Preview & Publish</h1>

            <p className="kp-subtitle">
              Review your product before publishing
            </p>


            <div className="kp-preview-card">

              <div className="kp-preview-image">

                {previewImage ? (
                  <img
                    src={previewImage}
                    alt={product.name}
                  />
                ) : (
                  <div className="kp-no-image">
                    🏺
                  </div>
                )}

              </div>


              <div className="kp-preview-info">

                <h2>{product.name}</h2>

                <span className="kp-ai-badge">
                  ✨ AI Suggested
                </span>

                <p>
                  {product.description}
                </p>

                <h3>{product.price}</h3>

                <div className="kp-preview-category">
                  Category:
                  <strong>{product.category}</strong>
                </div>

              </div>

            </div>


            {/* VERIFIED ARTISAN */}
            <div className="kp-verified-box">
              <span>🛡️</span>
              You are a Verified Artisan
              <span>✓</span>
            </div>


            {!published ? (

              <button
                className="kp-publish-button"
                onClick={publishProduct}
              >
                Publish Product 🚀
              </button>

            ) : (

              <div className="kp-success-box">

                <div>✓</div>

                <h2>Product Published Successfully!</h2>

                <p>
                  Your product has been added to Kala Mandali.
                </p>

                <div className="kp-success-actions">

                  <button
                    onClick={() => navigate("/dashboard")}
                  >
                    Go to Dashboard
                  </button>

                  <button
                    onClick={addAnotherProduct}
                  >
                    Add Another Product
                  </button>

                </div>

              </div>

            )}

          </section>
        )}

      </main>


      {/* ================= BOTTOM NAV ================= */}
      <nav className="kp-bottom-nav">

        <button onClick={() => navigate("/dashboard")}>
          <span>⌂</span>
          <small>Home</small>
        </button>

        <button className="active">
          <span>⊕</span>
          <small>Add Product</small>
        </button>

        <button>
          <span>▣</span>
          <small>Orders</small>
        </button>

        <button>
          <span>♙</span>
          <small>Profile</small>
        </button>

      </nav>

    </div>
  );
}

export default Addproduct;