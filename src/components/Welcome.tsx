type WelcomeProps = {
    name: string
}

export function Welcome(props: WelcomeProps) {
    return <div>hello {props.name}</div>
}