import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 m-6 bg-red-50 border-2 border-red-500 rounded-xl text-red-800 font-mono text-sm max-w-4xl mx-auto shadow-xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            ⚠️ Application Rendering Crash
          </h2>
          <p className="font-bold text-base mb-2">
            {this.state.error?.message || String(this.state.error)}
          </p>
          {this.state.error?.stack && (
            <pre className="bg-red-950 text-red-200 p-4 rounded-lg overflow-auto max-h-[300px] whitespace-pre-wrap text-xs">
              {this.state.error.stack}
            </pre>
          )}
          <div className="mt-4 flex gap-4">
            <button 
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-sans font-semibold hover:bg-red-700 transition-colors"
            >
              Reload Page
            </button>
            <button 
              onClick={() => { 
                try {
                  localStorage.clear();
                } catch(e) {
                  console.warn(e);
                }
                window.location.reload(); 
              }}
              className="bg-transparent border border-red-300 text-red-700 px-4 py-2 rounded-lg font-sans font-semibold hover:bg-red-100 transition-colors"
            >
              Clear Cache & Reload
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
