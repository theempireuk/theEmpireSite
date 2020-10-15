const spaceAdjectives = useMemo(
    () => [
        'lighspeed',
        'intergalactic',
        'stellar',
        'epic',
        'massive',
        'far-reaching',
        'asteroid-mining',
        'terraforming',
        'gravity-defying',
        'another-reasonable-space-adjective'
    ],
    []
)
const [spaceAdjective, setSpaceAdjective] = useState(spaceAdjectives[Math.floor(Math.random() * spaceAdjectives.length)])
