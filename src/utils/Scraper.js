import puppeteer from 'puppeteer';

const url = 'http://www.wxyc.info/playlists/recent'

const scrapeInfo = async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Scrapes music info from WXYC archiv
    const musicData = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('table:nth-of-type(2) tr[bgcolor="#F3F3F3"]'));
        return rows.map(row => {

            const artist = row.querySelector('td:nth-child(2)').textContent;
            const song = row.querySelector('td:nth-child(3)').textContent;
            const album = row.querySelector('td:nth-child(4)').textContent;
            return { artist, song, album };
        }).filter(item => item.artist && item.song && item.album);
    });

    console.log(musicData);
    await browser.close()
}

scrapeInfo('http://www.wxyc.info/playlists/recent');