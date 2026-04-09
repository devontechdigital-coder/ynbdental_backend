import mongoose from "mongoose";

const homeLayoutSchema = new mongoose.Schema(
    {

        top_bar: {
            type: String,
            default: ""
        },
        slider_img: {
            type: String,
            default: ""
        },
        home_slider: {
            type: Array,
            default: {}
        },
        trending_product_banner: {
            type: Array,
            default: {}
        },
        trending_product_carousal: {
            type: Array,
            default: {}
        },
        trending_highlights_carousal: {
            type: Array,
            default: {}
        },

        service_category_carousal: {
            type: Array,
            default: {}
        },

        service_category_Images: {
            type: Array,
            default: {}
        },
        service_logos: {
            type: Array,
            default: {}
        },
        service_banner_images: {
            type: Array,
            default: {}
        },



        best_selling_laptop: {
            type: Array,
            default: {}
        },
        collection_heading: {
            type: String,
            default: ""
        },
        collection_paragraph: {
            type: String,
            default: ""
        },
        collection_url: {
            type: String,
            default: ""
        },
        collection_img: {
            type: String,
            default: ""
        },
        latest_product: {
            type: Array,
            default: {}
        },
        latest_product_banner: {
            type: Array,
            default: {}
        },
        latest_product_carousal: {
            type: Array,
            default: {}
        },
        best_selling_smartphone: {
            type: Array,
            default: ""
        },
       home_doctor: {
            type: Array,
            default: {}
        },
        india_largest_team: {
            type: Object,
            default: {
                badge: "Dental Specialists Network",
                title: "India’s Most Trusted Network of Dental Specialists",
                subtitle: "Skilled. Certified. Compassionate.",
                stats: [
                    { icon: "🦷", value: "75+", title: "Orthodontists", desc: "Expert teeth aligner care", bg: "rgba(13,110,253,.12)" },
                    { icon: "👩‍⚕️", value: "70%", title: "Women Leading", desc: "Empathy, precision & excellence", bg: "rgba(25,135,84,.12)" },
                    { icon: "🎓", value: "65%", title: "MDS Doctors", desc: "Advanced care across specialties", bg: "rgba(255,193,7,.18)" }
                ]
            }
        },
        why_trust_section: {
            type: Object,
            default: {
                heading: "Why Trust YNB Dental",
                leftImage: "/assets/img/dental-image.webp",
                leftTitle: "Trusted Care. Skilled Doctors.",
                leftDescription: "Advanced dentistry with patient-first approach and modern technology.",
                badges: ["Sterile", "Doctor Led", "Modern Tech"],
                cards: [
                    {
                        icon: "🌍",
                        title: "Modern Dental Treatment",
                        subtitle: "Trusted standards that improve your experience",
                        point1: "Advanced dental equipment",
                        point2: "Premium quality materials",
                        point3: "Comfortable & painless procedures"
                    },
                    {
                        icon: "👨‍⚕️",
                        title: "Doctor-Led Patient Care",
                        subtitle: "Trusted standards that improve your experience",
                        point1: "One-to-one consultation",
                        point2: "Clear treatment explanation",
                        point3: "Personalized care approach"
                    },
                    {
                        icon: "⭐",
                        title: "Growing Experience",
                        subtitle: "Trusted standards that improve your experience",
                        point1: "Dedicated and skilled dental team",
                        point2: "Focus on quality treatment",
                        point3: "Every patient handled with care"
                    },
                    {
                        icon: "🛡️",
                        title: "High Safety Standards",
                        subtitle: "Trusted standards that improve your experience",
                        point1: "Strict sterilization protocols",
                        point2: "Clean and hygienic clinic",
                        point3: "Safe and secure environment"
                    },
                    {
                        icon: "🧩",
                        title: "Personalized Treatment Planning",
                        subtitle: "Trusted standards that improve your experience",
                        point1: "Tailored treatment options",
                        point2: "Patient-first approach",
                        point3: "Detailed dental assessment"
                    },
                    {
                        icon: "💰",
                        title: "Transparent & Honest Pricing",
                        subtitle: "Trusted standards that improve your experience",
                        point1: "No hidden charges",
                        point2: "Clear communication",
                        point3: "Affordable treatment options"
                    }
                ]
            }
        },
        faqData: {
          type: Object,
          default: {},
        },

    },
    { timestamps: true }
);

const homeLayoutModel = mongoose.model("homelayout", homeLayoutSchema);

// Check if data exists, if not, create a new document with default values
const checkOrCreateHomeDefaultData = async () => {
    try {
        const result = await homeLayoutModel.findOne({});
        if (!result) {
            // No document found, create a new one with default values
            const newData = new homeLayoutModel();
            await newData.save();
            console.log("Blank home Layout data created successfully.");
        }
    } catch (error) {
        console.error("Error checking or creating home data:", error);
    }
};

checkOrCreateHomeDefaultData();

export default homeLayoutModel;
