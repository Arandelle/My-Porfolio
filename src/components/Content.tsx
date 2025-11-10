import React from "react"

type ContentProps = {
  name: string;
  description: string;
};

const Content: React.FC<ContentProps> = ({name, description}) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-in-left">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">{name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
              Full-Stack Developer & UI/UX Designer
            </p>
            
            <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
            {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-left" style={{animationDelay: '0.6s'}}>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl transform-gpu">
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                 
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300 flex items-center gap-2 justify-center transform hover:scale-105">
             
                Resume
              </button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content
