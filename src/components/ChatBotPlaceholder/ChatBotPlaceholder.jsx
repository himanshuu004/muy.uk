import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

function ChatBotPlaceholder() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('hindi')
  const [showAssistancePrompt, setShowAssistancePrompt] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const messagesEndRef = useRef(null)

  const content = {
    hindi: {
      welcome: 'नमस्ते! मैं मुख्यमंत्री उद्यमशाला योजना के बारे में जानकारी में आपकी सहायता के लिए यहाँ हूँ। मैं आपकी कैसे मदद कर सकता हूँ?',
      online: 'ऑनलाइन',
      support: 'MUY सहायता',
      quickQuestions: 'त्वरित प्रश्न:',
      youMightAsk: 'आप यह भी पूछ सकते हैं:',
      placeholder: 'अपना संदेश टाइप करें...',
      ask: 'पूछें',
      needAssistance: 'सहायता चाहिए?',
      closeChat: 'चैट बंद करें',
      openChatbot: 'चैटबॉट खोलें',
      questions: [
        { en: 'What is MUY?', hi: 'MUY क्या है?' },
        { en: 'How to apply?', hi: 'कैसे आवेदन करें?' },
        { en: 'What services are offered?', hi: 'कौन सी सेवाएं प्रदान की जाती हैं?' },
        { en: 'Who can apply?', hi: 'कौन आवेदन कर सकता है?' },
        { en: 'What documents are needed?', hi: 'कौन से दस्तावेज़ चाहिए?' },
      ],
      responses: {
        'what is muy?': {
          en: 'MUY (Mukhyamantri Udyamshala Yojana) is a comprehensive government scheme designed to support and nurture entrepreneurs across the state by providing incubation support, mentorship, and funding assistance.',
          hi: 'MUY (मुख्यमंत्री उद्यमशाला योजना) राज्य भर में उद्यमियों का समर्थन और पोषण करने के लिए डिज़ाइन की गई एक व्यापक सरकारी योजना है जो इनक्यूबेशन सहायता, मेंटरशिप और वित्तीय सहायता प्रदान करती है।'
        },
        'how to apply?': {
          en: 'You can apply by visiting the Apply/Registration page on our website. Fill out the online application form with your business details and required documents.',
          hi: 'आप हमारी वेबसाइट पर आवेदन/पंजीकरण पृष्ठ पर जाकर आवेदन कर सकते हैं। अपने व्यापार विवरण और आवश्यक दस्तावेजों के साथ ऑनलाइन आवेदन फॉर्म भरें।'
        },
        'what services are offered?': {
          en: 'We offer business incubation support, mentorship programs, funding assistance, market linkage, technology support, and training workshops.',
          hi: 'हम व्यावसायिक इनक्यूबेशन सहायता, मेंटरशिप कार्यक्रम, वित्तीय सहायता, बाज़ार लिंकेज, प्रौद्योगिकी सहायता, और प्रशिक्षण कार्यशालाएं प्रदान करते हैं।'
        },
        'who can apply?': {
          en: 'Any entrepreneur, startup founder, or business owner with a viable business idea can apply. The scheme is open to individuals, partnerships, and registered companies.',
          hi: 'कोई भी उद्यमी, स्टार्टअप संस्थापक, या व्यवसाय मालिक एक व्यवहार्य व्यावसायिक विचार के साथ आवेदन कर सकता है। यह योजना व्यक्तियों, साझेदारी और पंजीकृत कंपनियों के लिए खुली है।'
        },
        'what documents are needed?': {
          en: 'You will need identity proof, business plan, address proof, bank details, and any relevant certificates or licenses related to your business.',
          hi: 'आपको पहचान प्रमाण, व्यापार योजना, पता प्रमाण, बैंक विवरण, और आपके व्यापार से संबंधित कोई भी प्रासंगिक प्रमाणपत्र या लाइसेंस की आवश्यकता होगी।'
        },
      },
      defaultResponse: {
        en: 'Thank you for your question. Please contact us for more detailed information.',
        hi: 'आपके प्रश्न के लिए धन्यवाद। अधिक विस्तृत जानकारी के लिए कृपया हमसे संपर्क करें।'
      }
    },
    english: {
      welcome: 'Hello! I\'m here to help you with information about Mukhyamantri Udyamshala Yojana. How can I assist you?',
      online: 'Online',
      support: 'MUY Support',
      quickQuestions: 'Quick Questions:',
      youMightAsk: 'You might also ask:',
      placeholder: 'Type your message...',
      ask: 'Ask',
      needAssistance: 'Need Assistance?',
      closeChat: 'Close chat',
      openChatbot: 'Open chatbot',
      questions: [
        { en: 'What is MUY?', hi: 'MUY क्या है?' },
        { en: 'How to apply?', hi: 'कैसे आवेदन करें?' },
        { en: 'What services are offered?', hi: 'कौन सी सेवाएं प्रदान की जाती हैं?' },
        { en: 'Who can apply?', hi: 'कौन आवेदन कर सकता है?' },
        { en: 'What documents are needed?', hi: 'कौन से दस्तावेज़ चाहिए?' },
      ],
      responses: {
        'what is muy?': {
          en: 'MUY (Mukhyamantri Udyamshala Yojana) is a comprehensive government scheme designed to support and nurture entrepreneurs across the state by providing incubation support, mentorship, and funding assistance.',
          hi: 'MUY (मुख्यमंत्री उद्यमशाला योजना) राज्य भर में उद्यमियों का समर्थन और पोषण करने के लिए डिज़ाइन की गई एक व्यापक सरकारी योजना है जो इनक्यूबेशन सहायता, मेंटरशिप और वित्तीय सहायता प्रदान करती है।'
        },
        'how to apply?': {
          en: 'You can apply by visiting the Apply/Registration page on our website. Fill out the online application form with your business details and required documents.',
          hi: 'आप हमारी वेबसाइट पर आवेदन/पंजीकरण पृष्ठ पर जाकर आवेदन कर सकते हैं। अपने व्यापार विवरण और आवश्यक दस्तावेजों के साथ ऑनलाइन आवेदन फॉर्म भरें।'
        },
        'what services are offered?': {
          en: 'We offer business incubation support, mentorship programs, funding assistance, market linkage, technology support, and training workshops.',
          hi: 'हम व्यावसायिक इनक्यूबेशन सहायता, मेंटरशिप कार्यक्रम, वित्तीय सहायता, बाज़ार लिंकेज, प्रौद्योगिकी सहायता, और प्रशिक्षण कार्यशालाएं प्रदान करते हैं।'
        },
        'who can apply?': {
          en: 'Any entrepreneur, startup founder, or business owner with a viable business idea can apply. The scheme is open to individuals, partnerships, and registered companies.',
          hi: 'कोई भी उद्यमी, स्टार्टअप संस्थापक, या व्यवसाय मालिक एक व्यवहार्य व्यावसायिक विचार के साथ आवेदन कर सकता है। यह योजना व्यक्तियों, साझेदारी और पंजीकृत कंपनियों के लिए खुली है।'
        },
        'what documents are needed?': {
          en: 'You will need identity proof, business plan, address proof, bank details, and any relevant certificates or licenses related to your business.',
          hi: 'आपको पहचान प्रमाण, व्यापार योजना, पता प्रमाण, बैंक विवरण, और आपके व्यापार से संबंधित कोई भी प्रासंगिक प्रमाणपत्र या लाइसेंस की आवश्यकता होगी।'
        },
      },
      defaultResponse: {
        en: 'Thank you for your question. Please contact us for more detailed information.',
        hi: 'आपके प्रश्न के लिए धन्यवाद। अधिक विस्तृत जानकारी के लिए कृपया हमसे संपर्क करें।'
      }
    }
  }

  const [messages, setMessages] = useState([
    { id: 1, text: content.hindi.welcome, sender: 'bot' },
  ])

  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        setShowAssistancePrompt(true)
        setTimeout(() => setShowAssistancePrompt(false), 5000)
      }, 60000)
      return () => clearInterval(interval)
    } else {
      setShowAssistancePrompt(false)
    }
  }, [isOpen])

  const resetChat = (newLanguage) => {
    setMessages([{ id: 1, text: content[newLanguage].welcome, sender: 'bot' }])
  }

  const handleLanguageChange = (newLanguage) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage)
      resetChat(newLanguage)
    }
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const getCurrentContent = () => content[language]

  const getBotResponse = (question) => {
    const questionLower = question.toLowerCase()
    const currentContent = getCurrentContent()
    const langKey = language === 'hindi' ? 'hi' : 'en'
    for (const key in currentContent.responses) {
      const response = currentContent.responses[key]
      if (questionLower.includes(key.replace('?', '').replace('what is muy', 'muy'))) {
        return response[langKey]
      }
      const hindiKeys = {
        'what is muy?': 'muy क्या',
        'how to apply?': 'कैसे आवेदन',
        'what services are offered?': 'सेवाएं',
        'who can apply?': 'कौन आवेदन',
        'what documents are needed?': 'दस्तावेज़'
      }
      if (hindiKeys[key] && questionLower.includes(hindiKeys[key].toLowerCase())) {
        return response[langKey]
      }
    }
    return null
  }

  const handleQuestionClick = (question) => {
    const currentContent = getCurrentContent()
    const userMessage = { id: messages.length + 1, text: question, sender: 'user' }
    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)
    setTimeout(() => {
      const response = getBotResponse(question)
      const botResponse = {
        id: messages.length + 2,
        text: response || currentContent.defaultResponse[language === 'hindi' ? 'hi' : 'en'],
        sender: 'bot',
      }
      setIsTyping(false)
      setMessages(prev => [...prev, botResponse])
    }, 900)
  }

  const handleSend = () => {
    if (!inputValue.trim()) return
    handleQuestionClick(inputValue.trim())
    setInputValue('')
  }

  const getNextQuestions = () => {
    const askedQuestions = messages.filter(m => m.sender === 'user').map(m => m.text.toLowerCase())
    const currentContent = getCurrentContent()
    return currentContent.questions.filter(q => {
      const asked = askedQuestions.some(aq => aq.includes(q.en.toLowerCase()) || aq.includes(q.hi.toLowerCase()))
      return !asked
    })
  }

  const nextQuestions = getNextQuestions()
  const currentContent = getCurrentContent()

  const ui = (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600&display=swap');

        :root {
          --muy-saffron: #FF6B00;
          --muy-saffron-light: #FF8C38;
          --muy-saffron-pale: #FFF3E8;
          --muy-deep: #1A0A00;
          --muy-gold: #FFB347;
          --muy-white: #FFFBF7;
          --muy-gray-light: #F5F0EB;
          --muy-gray-mid: #D4C9BE;
          --muy-gray-text: #7A6A5A;
          --shadow-warm: 0 8px 40px rgba(255,107,0,0.18);
          --shadow-float: 0 24px 64px rgba(26,10,0,0.18);
        }

        .muy-font { font-family: 'Sora', 'Noto Sans Devanagari', sans-serif; }

        /* FAB Button */
        .muy-fab {
          position: fixed;
          bottom: calc(16px + env(safe-area-inset-bottom, 0px));
          right: calc(16px + env(safe-area-inset-right, 0px));
          width: clamp(48px, 7vw, 60px);
          height: clamp(48px, 7vw, 60px);
          border-radius: 50%;
          background: linear-gradient(135deg, var(--muy-saffron) 0%, var(--muy-gold) 100%);
          border: none;
          cursor: pointer;
          z-index: 2147483647;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(255,107,0,0.45), 0 0 0 0 rgba(255,107,0,0.3);
          animation: fabPulse 2.5s ease-in-out infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .muy-fab:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 32px rgba(255,107,0,0.55);
        }
        .muy-fab:active { transform: scale(0.95); }
        @keyframes fabPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(255,107,0,0.45), 0 0 0 0 rgba(255,107,0,0.25); }
          50% { box-shadow: 0 4px 20px rgba(255,107,0,0.45), 0 0 0 10px rgba(255,107,0,0); }
        }
        .muy-fab-icon {
          font-size: clamp(20px, 3.6vw, 26px);
          line-height: 1;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
        }

        @media (prefers-reduced-motion: reduce) {
          .muy-fab { animation: none; }
        }

        /* Backdrop */
        .muy-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(26,10,0,0.35);
          backdrop-filter: blur(6px);
          z-index: 2147483646;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          animation: backdropIn 0.25s ease;
        }
        @keyframes backdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Chat window */
        .muy-chat {
          background: var(--muy-white);
          border-radius: 20px;
          width: 100%;
          max-width: 560px;
          height: min(80vh, 620px);
          max-height: 620px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: var(--shadow-float);
          animation: chatIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border: 1px solid rgba(255,107,0,0.12);
        }
        @keyframes chatIn {
          from { transform: translateY(32px) scale(0.96); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        /* Header */
        .muy-header {
          background: linear-gradient(135deg, var(--muy-saffron) 0%, #FF8C38 60%, var(--muy-gold) 100%);
          padding: 18px 20px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
          flex-shrink: 0;
        }
        .muy-header::before {
          content: '';
          position: absolute;
          top: -30px; right: -30px;
          width: 120px; height: 120px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
        }
        .muy-header::after {
          content: '';
          position: absolute;
          bottom: -40px; left: 60px;
          width: 80px; height: 80px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
        }
        .muy-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.25);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
          border: 2px solid rgba(255,255,255,0.4);
          flex-shrink: 0;
        }
        .muy-header-info { flex: 1; margin-left: 12px; }
        .muy-header-title {
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.01em;
          line-height: 1.2;
        }
        .muy-header-status {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-top: 3px;
        }
        .muy-status-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #7FFFD4;
          box-shadow: 0 0 6px #7FFFD4;
          animation: statusBlink 2s ease-in-out infinite;
        }
        @keyframes statusBlink {
          0%,100% { opacity: 1; } 50% { opacity: 0.5; }
        }
        .muy-header-status span {
          color: rgba(255,255,255,0.9);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.03em;
        }
        .muy-lang-toggle {
          display: flex;
          background: rgba(255,255,255,0.18);
          border-radius: 20px;
          padding: 3px;
          gap: 2px;
          position: relative;
          z-index: 1;
        }
        .muy-lang-btn {
          border: none;
          background: transparent;
          color: rgba(255,255,255,0.85);
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 16px;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Sora', sans-serif;
          letter-spacing: 0.02em;
        }
        .muy-lang-btn.active {
          background: rgba(255,255,255,0.95);
          color: var(--muy-saffron);
          box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        }
        .muy-close-btn {
          background: rgba(255,255,255,0.2);
          border: none;
          color: #fff;
          width: 32px; height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          margin-left: 12px;
          transition: background 0.2s;
          flex-shrink: 0;
          position: relative; z-index: 1;
        }
        .muy-close-btn:hover { background: rgba(255,255,255,0.35); }

        /* Messages area */
        .muy-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          scroll-behavior: smooth;
        }
        .muy-messages::-webkit-scrollbar { width: 4px; }
        .muy-messages::-webkit-scrollbar-track { background: transparent; }
        .muy-messages::-webkit-scrollbar-thumb { background: var(--muy-gray-mid); border-radius: 4px; }

        /* Message bubbles */
        .muy-bubble-wrap {
          display: flex;
          animation: bubbleIn 0.3s cubic-bezier(0.34,1.2,0.64,1);
        }
        @keyframes bubbleIn {
          from { opacity: 0; transform: translateY(10px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .muy-bubble-wrap.user { justify-content: flex-end; }
        .muy-bubble-wrap.bot { justify-content: flex-start; }

        .muy-bubble {
          max-width: 82%;
          padding: 11px 15px;
          border-radius: 16px;
          font-size: 13.5px;
          line-height: 1.6;
          position: relative;
        }
        .muy-bubble.user {
          background: linear-gradient(135deg, var(--muy-saffron) 0%, var(--muy-saffron-light) 100%);
          color: #fff;
          border-bottom-right-radius: 4px;
          box-shadow: 0 3px 12px rgba(255,107,0,0.25);
        }
        .muy-bubble.bot {
          background: var(--muy-gray-light);
          color: var(--muy-deep);
          border-bottom-left-radius: 4px;
          border: 1px solid rgba(212,201,190,0.6);
        }
        .muy-bot-row {
          display: flex;
          align-items: flex-end;
          gap: 8px;
        }
        .muy-bot-mini-avatar {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--muy-saffron), var(--muy-gold));
          display: flex; align-items: center; justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(255,107,0,0.25);
        }

        /* Typing indicator */
        .muy-typing {
          display: flex;
          align-items: center;
          gap: 8px;
          animation: bubbleIn 0.3s ease;
        }
        .muy-typing-dots {
          background: var(--muy-gray-light);
          border: 1px solid rgba(212,201,190,0.6);
          border-radius: 16px;
          border-bottom-left-radius: 4px;
          padding: 11px 15px;
          display: flex;
          gap: 4px;
          align-items: center;
        }
        .muy-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--muy-saffron);
          animation: dotBounce 1.2s ease-in-out infinite;
        }
        .muy-dot:nth-child(2) { animation-delay: 0.15s; }
        .muy-dot:nth-child(3) { animation-delay: 0.3s; }
        @keyframes dotBounce {
          0%,80%,100% { transform: translateY(0); opacity: 0.5; }
          40% { transform: translateY(-6px); opacity: 1; }
        }

        /* Quick questions */
        .muy-qs-label {
          font-size: 10.5px;
          font-weight: 600;
          color: var(--muy-gray-text);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .muy-qs-label::before {
          content: '';
          display: inline-block;
          width: 16px; height: 2px;
          background: var(--muy-saffron);
          border-radius: 2px;
        }
        .muy-qs-grid {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 4px;
        }
        .muy-q-chip {
          background: #fff;
          border: 1.5px solid rgba(255,107,0,0.2);
          border-radius: 10px;
          padding: 9px 13px;
          font-size: 12.5px;
          color: var(--muy-deep);
          cursor: pointer;
          text-align: left;
          transition: all 0.18s ease;
          font-family: 'Sora', 'Noto Sans Devanagari', sans-serif;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .muy-q-chip::before {
          content: '→';
          color: var(--muy-saffron);
          font-size: 13px;
          flex-shrink: 0;
          transition: transform 0.18s ease;
        }
        .muy-q-chip:hover {
          border-color: var(--muy-saffron);
          background: var(--muy-saffron-pale);
          color: var(--muy-saffron);
          transform: translateX(3px);
          box-shadow: 0 2px 12px rgba(255,107,0,0.12);
        }
        .muy-q-chip:hover::before { transform: translateX(2px); }

        /* Input area */
        .muy-input-area {
          padding: 12px 16px 16px;
          background: #fff;
          border-top: 1px solid rgba(212,201,190,0.5);
          display: flex;
          gap: 8px;
          align-items: flex-end;
          flex-shrink: 0;
        }
        .muy-textarea-wrap { flex: 1; position: relative; }
        .muy-textarea {
          width: 100%;
          border: 1.5px solid var(--muy-gray-mid);
          border-radius: 12px;
          padding: 10px 14px;
          font-size: 13px;
          font-family: 'Sora', 'Noto Sans Devanagari', sans-serif;
          color: var(--muy-deep);
          background: var(--muy-gray-light);
          resize: none;
          outline: none;
          min-height: 42px;
          max-height: 90px;
          transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
          line-height: 1.5;
          display: block;
          box-sizing: border-box;
        }
        .muy-textarea::placeholder { color: var(--muy-gray-text); opacity: 0.7; }
        .muy-textarea:focus {
          border-color: var(--muy-saffron);
          background: #fff;
          box-shadow: 0 0 0 3px rgba(255,107,0,0.1);
        }
        .muy-send-btn {
          width: 42px; height: 42px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--muy-saffron), var(--muy-saffron-light));
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 3px 12px rgba(255,107,0,0.3);
          transition: all 0.18s ease;
          flex-shrink: 0;
        }
        .muy-send-btn:hover {
          transform: scale(1.06);
          box-shadow: 0 5px 18px rgba(255,107,0,0.4);
        }
        .muy-send-btn:active { transform: scale(0.95); }
        .muy-send-btn svg { fill: #fff; }
        .muy-send-btn:disabled {
          background: var(--muy-gray-mid);
          box-shadow: none;
          cursor: not-allowed;
          transform: none;
        }

        /* Notification toast */
        .muy-toast {
          position: fixed;
          bottom: calc(84px + env(safe-area-inset-bottom, 0px));
          right: calc(16px + env(safe-area-inset-right, 0px));
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 8px 32px rgba(26,10,0,0.15);
          border: 1.5px solid rgba(255,107,0,0.15);
          padding: 12px 16px;
          z-index: 2147483647;
          width: min(320px, calc(100vw - 32px));
          display: flex;
          align-items: flex-start;
          gap: 10px;
          animation: toastIn 0.3s cubic-bezier(0.34,1.2,0.64,1);
        }
        @keyframes toastIn {
          from { opacity:0; transform: translateX(30px) scale(0.95); }
          to { opacity:1; transform: translateX(0) scale(1); }
        }
        .muy-toast-icon {
          width: 36px; height: 36px;
          border-radius: 50%;
          background: var(--muy-saffron-pale);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .muy-toast-body { flex: 1; }
        .muy-toast-title {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--muy-deep);
          margin-bottom: 2px;
        }
        .muy-toast-sub {
          font-size: 11px;
          color: var(--muy-gray-text);
        }
        .muy-toast-actions {
          display: flex;
          gap: 6px;
          margin-top: 8px;
        }
        .muy-toast-chat-btn {
          padding: 5px 12px;
          background: linear-gradient(135deg, var(--muy-saffron), var(--muy-saffron-light));
          color: #fff;
          border: none;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Sora', sans-serif;
          transition: opacity 0.15s;
        }
        .muy-toast-chat-btn:hover { opacity: 0.88; }
        .muy-toast-close {
          background: none;
          border: none;
          color: var(--muy-gray-text);
          cursor: pointer;
          font-size: 14px;
          padding: 2px;
          line-height: 1;
          flex-shrink: 0;
          margin-top: -2px;
        }
        .muy-toast-close:hover { color: var(--muy-deep); }

        /* Divider line for "you might also ask" */
        .muy-divider {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 8px 0 4px;
        }
        .muy-divider-line {
          flex: 1;
          height: 1px;
          background: var(--muy-gray-mid);
        }

        /* Small screens: use near-fullscreen chat */
        @media (max-width: 520px) {
          .muy-backdrop { padding: 12px; align-items: flex-end; }
          .muy-chat {
            max-width: 100%;
            width: 100%;
            height: min(86dvh, 720px);
            max-height: none;
            border-radius: 16px;
          }
        }
      `}</style>

      {/* Assistance Toast */}
      {showAssistancePrompt && !isOpen && (
        <div className="muy-toast muy-font">
          <div className="muy-toast-icon">💬</div>
          <div className="muy-toast-body">
            <div className="muy-toast-title">Need Assistance? / सहायता चाहिए?</div>
            <div className="muy-toast-sub">We're here to help! / हम मदद के लिए यहाँ हैं!</div>
            <div className="muy-toast-actions">
              <button
                className="muy-toast-chat-btn"
                onClick={() => { setIsOpen(true); setShowAssistancePrompt(false) }}
              >
                Chat / चैट
              </button>
            </div>
          </div>
          <button className="muy-toast-close" onClick={() => setShowAssistancePrompt(false)}>✕</button>
        </div>
      )}

      {/* FAB */}
      <button
        className="muy-fab"
        onClick={() => { setIsOpen(!isOpen); setShowAssistancePrompt(false) }}
        aria-label={currentContent.openChatbot}
      >
        <span className="muy-fab-icon">{isOpen ? '✕' : '💬'}</span>
      </button>

      {/* Chat Popup */}
      {isOpen && (
        <div className="muy-backdrop">
          <div className="muy-chat muy-font">

            {/* Header */}
            <div className="muy-header">
              <div className="muy-avatar">🏛️</div>
              <div className="muy-header-info">
                <div className="muy-header-title">{currentContent.support}</div>
                <div className="muy-header-status">
                  <div className="muy-status-dot" />
                  <span>{currentContent.online}</span>
                </div>
              </div>
              <div className="muy-lang-toggle">
                <button
                  className={`muy-lang-btn ${language === 'hindi' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('hindi')}
                >हिंदी</button>
                <button
                  className={`muy-lang-btn ${language === 'english' ? 'active' : ''}`}
                  onClick={() => handleLanguageChange('english')}
                >EN</button>
              </div>
              <button className="muy-close-btn" onClick={() => setIsOpen(false)} aria-label={currentContent.closeChat}>✕</button>
            </div>

            {/* Messages */}
            <div className="muy-messages">
              {messages.map((message) => (
                <div key={message.id} className={`muy-bubble-wrap ${message.sender}`}>
                  {message.sender === 'bot' ? (
                    <div className="muy-bot-row">
                      <div className="muy-bot-mini-avatar">🏛️</div>
                      <div className="muy-bubble bot">{message.text}</div>
                    </div>
                  ) : (
                    <div className="muy-bubble user">{message.text}</div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="muy-typing">
                  <div className="muy-bot-mini-avatar">🏛️</div>
                  <div className="muy-typing-dots">
                    <div className="muy-dot" />
                    <div className="muy-dot" />
                    <div className="muy-dot" />
                  </div>
                </div>
              )}

              {/* Initial quick questions */}
              {messages.length === 1 && !isTyping && (
                <div style={{ marginTop: '4px' }}>
                  <div className="muy-qs-label">{currentContent.quickQuestions}</div>
                  <div className="muy-qs-grid">
                    {currentContent.questions.map((question, index) => (
                      <button
                        key={index}
                        className="muy-q-chip"
                        onClick={() => handleQuestionClick(language === 'hindi' ? question.hi : question.en)}
                      >
                        {language === 'hindi' ? question.hi : question.en}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Follow-up questions */}
              {messages.length > 1 && !isTyping && messages[messages.length - 1].sender === 'bot' && nextQuestions.length > 0 && (
                <div>
                  <div className="muy-divider">
                    <div className="muy-divider-line" />
                    <div className="muy-qs-label" style={{ margin: 0 }}>{currentContent.youMightAsk}</div>
                    <div className="muy-divider-line" />
                  </div>
                  <div className="muy-qs-grid">
                    {nextQuestions.slice(0, 3).map((question, index) => (
                      <button
                        key={index}
                        className="muy-q-chip"
                        onClick={() => handleQuestionClick(language === 'hindi' ? question.hi : question.en)}
                      >
                        {language === 'hindi' ? question.hi : question.en}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="muy-input-area">
              <div className="muy-textarea-wrap">
                <textarea
                  className="muy-textarea"
                  placeholder={currentContent.placeholder}
                  value={inputValue}
                  onChange={e => setInputValue(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend() } }}
                  rows={1}
                />
              </div>
              <button
                className="muy-send-btn"
                onClick={handleSend}
                disabled={!inputValue.trim()}
                aria-label={currentContent.ask}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  )

  if (!isClient) return null
  return createPortal(ui, document.body)
}

export default ChatBotPlaceholder