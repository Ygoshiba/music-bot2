module.exports = {
    TOKEN: 'OTkwNDg1ODYxNTE2ODU3MzY3.GAvuGT.itwx5YwnmuAOLKHaWvZ-IAjVgegeJRNxJ-7ijM',
    px: ';',
    listening: 'Type',

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'leave', 'volume']
        },
        selfDeaf: true,
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};