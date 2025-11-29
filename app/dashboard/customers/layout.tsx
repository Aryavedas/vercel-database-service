interface CustomersPageProps {
    children: void
}

export default function Layout({ children }: CustomersPageProps) {
    return (
        <>
            <p>Layout Berbeda</p>
            {children}
        </>
    )
}