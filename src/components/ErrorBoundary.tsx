import React from 'react';

type Props = {
    children: React.ReactNode;
    fallback?: React.ReactNode;
};

type State = {
    hasError: boolean;
    error: Error | null;
};

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, info);
    }

    render() {
        const { hasError, error } = this.state;
        const { fallback } = this.props;

        if (hasError) {
            return fallback ?? (
                <div style={{ color: 'red' }}>
                    ⚠️ Something went wrong while loading the module.
                    <pre>{error?.message}</pre>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
