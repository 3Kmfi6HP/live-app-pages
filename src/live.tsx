export async function renderContent(data: { pingtai: any[] }) {
    const { pingtai } = data;

    // Sort the platforms based on platform.Number
    pingtai.sort((a, b) => parseInt(b.Number) - parseInt(a.Number));

    return (
        <div class="container content-wrapper">
            <div class="section">
                <div class="row columns columns is-multiline">
                    {pingtai
                        .filter((platform) => platform.Number !== "0")
                        .map((platform) => (
                            <div class="column is-6-desktop is-3-widescreen is-half-tablet">
                                <div class="card large" key={platform.address}>
                                    <div class="card-content">
                                        <figure class="image">
                                            <a href={platform.address.replace("json", "").replace(".txt", "")}><img src={platform.xinimg} alt={platform.title} style={{ width: '300px' }} /></a>
                                        </figure>
                                        <p class="content">
                                            <p class="title is-4 no-padding">{platform.title}</p>

                                            <p>
                                                <small class="subtitle">Number: {platform.Number}</small>
                                            </p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}


export async function renderLiveContent(data: { zhubo: any[] }) {
    const { zhubo } = data;
    return (
        <div class="container content-wrapper" >
            <div class="section">
                <div class="row columns columns is-multiline">
                    {zhubo
                        .map((platform) => (
                            <div class="column is-6-desktop is-3-widescreen is-half-tablet">
                                <div class="card large" key={platform.address}>
                                    <div class="card-content">
                                        <figure class="image">
                                            <a target="_blank" href={platform.address.includes("m3u8") ? "http://dp.haiwaikan.com/index.html?url=https://cloudflare-reverse-proxy-4c5.pages.dev/proxy/" + platform.address : platform.address}>
                                                <img src={platform.img} alt={platform.title} style={{ width: '300px' }} />
                                            </a>
                                        </figure>
                                        <p class="content">
                                            <p class="title is-4 no-padding">{platform.title}</p>
                                        </p>
                                        {/* <button onClick={() => handleCopyClick(platform.address)}>Copy</button> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

        </div >
    );
}

