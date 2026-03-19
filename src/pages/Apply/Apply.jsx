import { useState } from 'react'

// Apply/Registration page with comprehensive bilingual form
function Apply() {
  const [formData, setFormData] = useState({
    applicantCategory: '',
    fullName: '',
    fatherHusbandName: '',
    gender: '',
    dateOfBirth: '',
    socialCategory: '',
    mobileNumber: '',
    alternateMobileNumber: '',
    email: '',
    address: '',
    district: '',
    block: '',
    pinCode: '',
    educationalQualification: '',
    idProofType: '',
    idProofNumber: '',
    enterpriseRegistered: '',
    trainingReceived: '',
    turnover: '',
    generatingEmployment: '',
    employmentType: '',
    ageOfBusiness: '',
    loanApplied: '',
    marketingPartners: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = 'https://ukrbi.in/new'
  }

  const districts = ['Select District', 'District 1', 'District 2', 'District 3']
  const blocks = ['Select Block', 'Block 1', 'Block 2', 'Block 3']

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
            Call For Application
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
            MUY – Call for Application Form
          </h2>
          <p className="text-gray-600">
            (Mukhyamantri Udyamshala Yojana)
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-8">
          
          {/* Section 1: Basic Details */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-bold text-primary mb-6">Section 1: Basic Details / मूल विवरण</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Applicant Category */}
              <div>
                <label htmlFor="applicantCategory" className="block text-sm font-semibold text-gray-700 mb-2">
                  1. Applicant Category / आवेदक की श्रेणी <span className="text-primary">*</span>
                </label>
                <select
                  id="applicantCategory"
                  name="applicantCategory"
                  required
                  value={formData.applicantCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select / चुनें</option>
                  <option value="Individual / व्यक्तिगत">Individual / व्यक्तिगत</option>
                  <option value="SHG / स्वयं सहायता समूह">SHG / स्वयं सहायता समूह</option>
                  <option value="Enterprise / उद्यम">Enterprise / उद्यम</option>
                  <option value="Other / अन्य">Other / अन्य</option>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  2. Full Name / आवेदक का पूरा नाम <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Father's/Husband's Name */}
              <div>
                <label htmlFor="fatherHusbandName" className="block text-sm font-semibold text-gray-700 mb-2">
                  3. Father's / Husband's Name / पिता/पति का नाम
                </label>
                <input
                  type="text"
                  id="fatherHusbandName"
                  name="fatherHusbandName"
                  value={formData.fatherHusbandName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Gender */}
              <div>
                <label htmlFor="gender" className="block text-sm font-semibold text-gray-700 mb-2">
                  4. Gender / लिंग <span className="text-primary">*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select / चुनें</option>
                  <option value="Male / पुरुष">Male / पुरुष</option>
                  <option value="Female / महिला">Female / महिला</option>
                  <option value="Other / अन्य">Other / अन्य</option>
                </select>
              </div>

              {/* Date of Birth */}
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-700 mb-2">
                  5. Date of Birth / Formation Date / जन्म तिथि <span className="text-primary">*</span>
                </label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Social Category */}
              <div>
                <label htmlFor="socialCategory" className="block text-sm font-semibold text-gray-700 mb-2">
                  6. Social Category / सामाजिक श्रेणी <span className="text-primary">*</span>
                </label>
                <select
                  id="socialCategory"
                  name="socialCategory"
                  required
                  value={formData.socialCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select / चुनें</option>
                  <option value="General / सामान्य">General / सामान्य</option>
                  <option value="OBC / अन्य पिछड़ा वर्ग">OBC / अन्य पिछड़ा वर्ग</option>
                  <option value="SC / अनुसूचित जाति">SC / अनुसूचित जाति</option>
                  <option value="ST / अनुसूचित जनजाति">ST / अनुसूचित जनजाति</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Contact Details */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-bold text-primary mb-6">Section 2: Contact Details / संपर्क विवरण</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Mobile Number */}
              <div>
                <label htmlFor="mobileNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                  7. Mobile Number / WhatsApp No. / मोबाइल नंबर <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  required
                  maxLength="10"
                  pattern="[0-9]{10}"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="10 digits"
                />
              </div>

              {/* Alternate Mobile Number */}
              <div>
                <label htmlFor="alternateMobileNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                  8. Alternate Mobile Number / वैकल्पिक मोबाइल नंबर
                </label>
                <input
                  type="tel"
                  id="alternateMobileNumber"
                  name="alternateMobileNumber"
                  maxLength="10"
                  pattern="[0-9]{10}"
                  value={formData.alternateMobileNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="10 digits (Optional)"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  9. Email ID / ईमेल आईडी
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Address Details */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-bold text-primary mb-6">Section 3: Address Details / पता विवरण</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Address */}
              <div className="lg:col-span-2">
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  10. Address (Village) / ग्राम का नाम
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* District */}
              <div>
                <label htmlFor="district" className="block text-sm font-semibold text-gray-700 mb-2">
                  11. District / जनपद <span className="text-primary">*</span>
                </label>
                <select
                  id="district"
                  name="district"
                  required
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {districts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>

              {/* Block */}
              <div>
                <label htmlFor="block" className="block text-sm font-semibold text-gray-700 mb-2">
                  12. Block / विकास खंड <span className="text-primary">*</span>
                </label>
                <select
                  id="block"
                  name="block"
                  required
                  value={formData.block}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {blocks.map((block) => (
                    <option key={block} value={block}>{block}</option>
                  ))}
                </select>
              </div>

              {/* Pin Code */}
              <div>
                <label htmlFor="pinCode" className="block text-sm font-semibold text-gray-700 mb-2">
                  13. Pin Code / पिनकोड <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  required
                  maxLength="6"
                  pattern="[0-9]{6}"
                  value={formData.pinCode}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="6 digits"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Education & Identity */}
          <div className="border-b border-gray-200 pb-6">
            <h3 className="text-xl font-bold text-primary mb-6">Section 4: Education & Identity / शिक्षा और पहचान</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Educational Qualification */}
              <div>
                <label htmlFor="educationalQualification" className="block text-sm font-semibold text-gray-700 mb-2">
                  14. Educational Qualification / शैक्षणिक योग्यता <span className="text-primary">*</span>
                </label>
                <select
                  id="educationalQualification"
                  name="educationalQualification"
                  required
                  value={formData.educationalQualification}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select / चुनें</option>
                  <option value="Below 10th">Below 10th</option>
                  <option value="10th Pass">10th Pass</option>
                  <option value="12th Pass">12th Pass</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* ID Proof Type */}
              <div>
                <label htmlFor="idProofType" className="block text-sm font-semibold text-gray-700 mb-2">
                  15. ID Proof Type / आईडी प्रूफ प्रकार
                </label>
                <select
                  id="idProofType"
                  name="idProofType"
                  value={formData.idProofType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select / चुनें</option>
                  <option value="Aadhaar Card">Aadhaar Card</option>
                  <option value="Voter ID">Voter ID</option>
                  <option value="PAN Card">PAN Card</option>
                  <option value="Driving License">Driving License</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* ID Proof Number - Made Required */}
              <div>
                <label htmlFor="idProofNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                  16. ID Proof Number / आईडी प्रूफ नंबर <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="idProofNumber"
                  name="idProofNumber"
                  required
                  value={formData.idProofNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          {/* Section 5: Enterprise & Business Details */}
          <div className="pb-6">
            <h3 className="text-xl font-bold text-primary mb-6">Section 5: Enterprise & Business Details / उद्यम और व्यवसाय विवरण</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Enterprise Registered */}
              <div>
                <label htmlFor="enterpriseRegistered" className="block text-sm font-semibold text-gray-700 mb-2">
                  17. Is your enterprise registered? / क्या आपका उद्यम पंजीकृत है? <span className="text-primary">*</span>
                </label>
                <select
                  id="enterpriseRegistered"
                  name="enterpriseRegistered"
                  required
                  value={formData.enterpriseRegistered}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select / चुनें</option>
                  <option value="Yes / हाँ">Yes / हाँ</option>
                  <option value="No / नहीं">No / नहीं</option>
                </select>
              </div>

              {/* Training Received */}
              <div>
                <label htmlFor="trainingReceived" className="block text-sm font-semibold text-gray-700 mb-2">
                  18. Have you received any entrepreneurship/self-employment training? / क्या आपने कोई उद्यमिता/स्वरोजगार प्रशिक्षण प्राप्त किया है? <span className="text-primary">*</span>
                </label>
                <select
                  id="trainingReceived"
                  name="trainingReceived"
                  required
                  value={formData.trainingReceived}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select / चुनें</option>
                  <option value="Yes / हाँ">Yes / हाँ</option>
                  <option value="No / नहीं">No / नहीं</option>
                </select>
              </div>

              {/* Turnover */}
              <div>
                <label htmlFor="turnover" className="block text-sm font-semibold text-gray-700 mb-2">
                  19. Turnover of Last Financial Year / पिछले वित्तीय वर्ष का कारोबार <span className="text-primary">*</span>
                </label>
                <input
                  type="number"
                  id="turnover"
                  name="turnover"
                  required
                  value={formData.turnover}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Amount in ₹"
                />
              </div>

              {/* Generating Employment */}
              <div>
                <label htmlFor="generatingEmployment" className="block text-sm font-semibold text-gray-700 mb-2">
                  20. Are you currently generating any employment? / क्या आप वर्तमान में कोई रोजगार सृजन कर रहे हैं? <span className="text-primary">*</span>
                </label>
                <select
                  id="generatingEmployment"
                  name="generatingEmployment"
                  required
                  value={formData.generatingEmployment}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select / चुनें</option>
                  <option value="Yes / हाँ">Yes / हाँ</option>
                  <option value="No / नहीं">No / नहीं</option>
                </select>
              </div>

              {/* Employment Type */}
              <div>
                <label htmlFor="employmentType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Employment Type / रोजगार प्रकार <span className="text-primary">*</span>
                </label>
                <select
                  id="employmentType"
                  name="employmentType"
                  required
                  value={formData.employmentType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select / चुनें</option>
                  <option value="Full Time / पूर्णकालिक">Full Time / पूर्णकालिक</option>
                  <option value="Part Time / अंशकालिक">Part Time / अंशकालिक</option>
                </select>
              </div>

              {/* Age of Business */}
              <div>
                <label htmlFor="ageOfBusiness" className="block text-sm font-semibold text-gray-700 mb-2">
                  21. Age of Business / व्यवसाय की आयु <span className="text-primary">*</span>
                </label>
                <select
                  id="ageOfBusiness"
                  name="ageOfBusiness"
                  required
                  value={formData.ageOfBusiness}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select / चुनें</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1 – 3 years">1 – 3 years</option>
                  <option value="3 – 5 years">3 – 5 years</option>
                  <option value="More than 5 years">More than 5 years</option>
                </select>
              </div>

              {/* Loan Applied */}
              <div>
                <label htmlFor="loanApplied" className="block text-sm font-semibold text-gray-700 mb-2">
                  22. Have you applied for or taken any loan from a bank? / क्या आपने बैंक से कोई ऋण लिया है? <span className="text-primary">*</span>
                </label>
                <select
                  id="loanApplied"
                  name="loanApplied"
                  required
                  value={formData.loanApplied}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select / चुनें</option>
                  <option value="Yes / हाँ">Yes / हाँ</option>
                  <option value="No / नहीं">No / नहीं</option>
                </select>
              </div>

              {/* Marketing Partners */}
              <div>
                <label htmlFor="marketingPartners" className="block text-sm font-semibold text-gray-700 mb-2">
                  23. Are there any marketing partners currently associated with your enterprise? / क्या आपके उद्यम के साथ कोई विपणन भागीदार जुड़े हैं?
                </label>
                <select
                  id="marketingPartners"
                  name="marketingPartners"
                  value={formData.marketingPartners}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select / चुनें</option>
                  <option value="Yes / हाँ">Yes / हाँ</option>
                  <option value="No / नहीं">No / नहीं</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 border-t border-gray-200">
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Submit Application / आवेदन जमा करें
            </button>
            <p className="text-sm text-gray-500 text-center mt-4">
              <span className="text-primary">*</span> Required fields / आवश्यक फ़ील्ड
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Apply
