import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
    
    // In a real app, you would send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: Sentry.captureException(error);
    }
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-charcoal flex items-center justify-center p-4">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 bg-gradient-to-br from-terracotta to-marigold rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-charcoal" />
            </div>
            
            <h1 className="text-2xl font-bold font-montserrat text-white mb-4">
              Something went wrong
            </h1>
            
            <p className="text-gray-400 font-inter mb-8 leading-relaxed">
              We're sorry, but something unexpected happened. Please try refreshing the page or contact us if the problem persists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="bg-gradient-to-r from-marigold to-terracotta text-charcoal px-6 py-3 rounded-full font-inter font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                Refresh Page
              </button>
              
              <a
                href="mailto:hello@kgillmedia.co.ke"
                className="border-2 border-white/30 text-white px-6 py-3 rounded-full font-inter font-semibold hover:bg-white/10 transition-all duration-300 text-center"
              >
                Contact Support
              </a>
            </div>
            
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="text-gray-500 cursor-pointer mb-2">Error Details (Development)</summary>
                <pre className="bg-slate-900 p-4 rounded-lg text-xs text-gray-300 overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;