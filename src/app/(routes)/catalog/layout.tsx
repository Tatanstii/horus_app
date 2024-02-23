type Props = {
    modal: React.ReactNode;
    children: React.ReactNode;
}

export default function Layout({ children, modal }: Props) {
    return (
        <>
            {children}
        </>
    );
}