module.exports = {
  driveName: "JaysonTM's game OSTs",
  driveUrl: 'https://drive.google.com/drive/u/0/folders/0B6v9d_hMqZXRdktuM2VYbl9LQzg',
  charterName: 'JaysonTM',
  nameParser: name => {
    if (name.indexOf('-') < 0) return { artist: 'N/A', song: name };
    const [artist, song] = name.split(' - ');
    return { artist, song };
  }
};
