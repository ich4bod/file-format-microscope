const fs=require('fs'); const out='fixtures';
const gif=Buffer.from([71,73,70,56,57,97,1,0,1,0,128,0,0,0,0,0,255,255,255,44,0,0,0,0,1,0,1,0,0,2,2,68,1,0,59]);
const bmp=Buffer.alloc(58); bmp.write('BM');bmp.writeUInt32LE(58,2);bmp.writeUInt32LE(54,10);bmp.writeUInt32LE(40,14);bmp.writeUInt32LE(1,18);bmp.writeUInt32LE(1,22);bmp.writeUInt16LE(1,26);bmp.writeUInt16LE(24,28);bmp.writeUInt32LE(4,34);bmp[54]=80;
const wav=Buffer.alloc(46);wav.write('RIFF');wav.writeUInt32LE(38,4);wav.write('WAVE',8);wav.write('fmt ',12);wav.writeUInt32LE(16,16);wav.writeUInt16LE(1,20);wav.writeUInt16LE(1,22);wav.writeUInt32LE(8000,24);wav.writeUInt32LE(8000,28);wav.writeUInt16LE(1,32);wav.writeUInt16LE(8,34);wav.write('data',36);wav.writeUInt32LE(2,40);wav[44]=128;wav[45]=128;
fs.writeFileSync(out+'/pixel.gif',gif);fs.writeFileSync(out+'/pixel.bmp',bmp);fs.writeFileSync(out+'/tone.wav',wav);
