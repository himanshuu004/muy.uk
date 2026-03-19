import { useState, useEffect, useRef } from 'react'

// Chatbot popup with bigger size, questions in chats, and text area with ask button
function ChatBotPlaceholder() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState('hindi') // Default to Hindi
  const [showAssistancePrompt, setShowAssistancePrompt] = useState(false)
  const messagesEndRef = useRef(null)

  // Bilingual content
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
    {
      id: 1,
      text: content.hindi.welcome,
      sender: 'bot',
    },
  ])

  // Show assistance prompt every 1 minute
  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        setShowAssistancePrompt(true)
        // Auto hide after 5 seconds
        setTimeout(() => {
          setShowAssistancePrompt(false)
        }, 5000)
      }, 60000) // 1 minute

      return () => clearInterval(interval)
    } else {
      setShowAssistancePrompt(false)
    }
  }, [isOpen])

  // Function to reset chat with welcome message
  const resetChat = (newLanguage) => {
      setMessages([{
        id: 1,
      text: content[newLanguage].welcome,
        sender: 'bot',
      }])
    }

  // Handle language change and reset chat
  const handleLanguageChange = (newLanguage) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage)
      resetChat(newLanguage)
    }
  }

  // Auto scroll to bottom when new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const getCurrentContent = () => content[language]

  const handleQuestionClick = (question) => {
    const currentContent = getCurrentContent()
    // Add user message (show in selected language)
    const userMessage = {
      id: messages.length + 1,
      text: question,
      sender: 'user',
    }
    
    // Add bot response (only in selected language)
    const response = getBotResponse(question)
    const botResponse = {
      id: messages.length + 2,
      text: response || currentContent.defaultResponse[language === 'hindi' ? 'hi' : 'en'],
      sender: 'bot',
    }

    setMessages([...messages, userMessage, botResponse])
  }


  const getBotResponse = (question) => {
    const questionLower = question.toLowerCase()
    const currentContent = getCurrentContent()
    const langKey = language === 'hindi' ? 'hi' : 'en'
    
    // Check for matches in both languages
    for (const key in currentContent.responses) {
      const response = currentContent.responses[key]
      // Check English key
      if (questionLower.includes(key.replace('?', '').replace('what is muy', 'muy'))) {
        return response[langKey]
      }
      // Check Hindi equivalent (rough match)
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

  // Get next question to show (exclude already asked questions)
  const getNextQuestions = () => {
    const askedQuestions = messages
      .filter(msg => msg.sender === 'user')
      .map(msg => msg.text.toLowerCase())
    
    const currentContent = getCurrentContent()
    return currentContent.questions.filter(q => {
      const asked = askedQuestions.some(aq => 
        aq.includes(q.en.toLowerCase()) || aq.includes(q.hi.toLowerCase())
      )
      return !asked
    })
  }

  const nextQuestions = getNextQuestions()
  const currentContent = getCurrentContent()

  return (
    <>
      {/* Assistance Prompt Notification */}
      {showAssistancePrompt && !isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 bg-primary text-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg shadow-lg z-40 flex items-center gap-2 sm:gap-3 animate-slide-up max-w-[calc(100vw-8rem)] sm:max-w-sm">
          <span className="text-base sm:text-lg flex-shrink-0">💬</span>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-xs sm:text-sm">Need Assistance? / सहायता चाहिए?</p>
            <p className="text-[10px] sm:text-xs opacity-90 mt-0.5 sm:mt-1">We're here to help! / हम मदद के लिए यहाँ हैं!</p>
          </div>
          <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              onClick={() => {
                setIsOpen(true)
                setShowAssistancePrompt(false)
              }}
              className="px-2 sm:px-3 py-1 bg-white text-primary rounded text-[10px] sm:text-xs font-semibold hover:bg-gray-100 whitespace-nowrap"
            >
              Chat / चैट
            </button>
            <button
              onClick={() => setShowAssistancePrompt(false)}
              className="text-white hover:text-gray-200 text-xs sm:text-sm"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Chat Button - Bottom Right */}
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          setShowAssistancePrompt(false)
        }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors flex items-center justify-center z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={currentContent.openChatbot}
        title={currentContent.openChatbot}
      >
        <span className="text-xl sm:text-2xl">💬</span>
      </button>

      {/* Chat Popup - Centered and Bigger Size */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl h-[80vh] max-h-[600px] flex flex-col border border-gray-200 relative">
            {/* Header */}
            <div className="bg-primary text-white p-4 rounded-t-lg flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">{currentContent.support}</h3>
                  <p className="text-xs opacity-90">{currentContent.online}</p>
                </div>
                {/* Language Toggle */}
                <div className="flex gap-2 ml-4">
                  <button
                    onClick={() => handleLanguageChange('hindi')}
                    className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                      language === 'hindi' 
                        ? 'bg-white text-primary' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    हिंदी
                  </button>
                  <button
                    onClick={() => handleLanguageChange('english')}
                    className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
                      language === 'english' 
                        ? 'bg-white text-primary' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 focus:outline-none text-xl"
                aria-label={currentContent.closeChat}
              >
                ✕
              </button>
            </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg p-3 text-sm sm:text-base ${
                    message.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            
            {/* Show next questions after bot response */}
            {messages.length > 1 && messages[messages.length - 1].sender === 'bot' && nextQuestions.length > 0 && (
              <div className="space-y-2 mt-4">
                <p className="text-xs text-gray-500 mb-2">{currentContent.youMightAsk}</p>
                {nextQuestions.slice(0, 3).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(language === 'hindi' ? question.hi : question.en)}
                    className="block w-full text-left text-xs sm:text-sm px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 transition-colors border border-gray-200"
                  >
                    {language === 'hindi' ? question.hi : question.en}
                  </button>
                ))}
              </div>
            )}

            {/* Initial Quick Questions */}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 mb-2">{currentContent.quickQuestions}</p>
                {currentContent.questions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(language === 'hindi' ? question.hi : question.en)}
                    className="block w-full text-left text-xs sm:text-sm px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 transition-colors border border-gray-200"
                  >
                    {language === 'hindi' ? question.hi : question.en}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        </div>
      )}

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default ChatBotPlaceholder
