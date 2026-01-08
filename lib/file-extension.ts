import type { MimeString } from './mime';

/**
 * Common file extensions.
 */
export const FileExtension = [
    /** *********************************
     * Text Files
     ***********************************/

    /** Microsoft Word Document (Legacy) */
    'doc',

    /** Microsoft Word Document */
    'docx',

    /** E-Mail Message */
    'eml',

    /** Outlook Message Item File */
    'msg',

    /** OpenDocument Text Document */
    'odt',

    /** Apple Pages Document */
    'pages',

    /** Rich Text Format File */
    'rtf',

    /** LaTeX Source Document */
    'tex',

    /** Plain Text File */
    'txt',

    /** WordPerfect Document */
    'wpd',


    /** *********************************
     * Data Files
     ***********************************/

    /** Sidecar Image Edit File */
    'aae',

    /** Generic Binary File */
    'bin',

    /** Comma-Separated Values File */
    'csv',

    /** Data File */
    'dat',

    /** Apple Keynote Presentation */
    'key',

    /** Log File */
    'log',

    /** Microsoft Project File */
    'mpp',

    /** Android Opaque Binary Blob File */
    'obb',

    /** Microsoft PowerPoint Presentation (Legacy) */
    'ppt',

    /** Microsoft PowerPoint Presentation */
    'pptx',

    /** Crystal Reports File */
    'rpt',

    /** Tape Archive */
    'tar',

    /** vCard File */
    'vcf',

    /** XML File */
    'xml',


    /** *********************************
     * Audio Files
     ***********************************/

    /** Audio Interchange File Format */
    'aif',

    /** Free Lossless Audio Codec File */
    'flac',

    /** M3U Media Playlist */
    'm3u',

    /** MPEG-4 Audio */
    'm4a',

    /** MIDI File */
    'mid',

    /** MP3 Audio */
    'mp3',

    /** Ogg Vorbis Audio */
    'ogg',

    /** WAVE Audio */
    'wav',

    /** Windows Media Audio */
    'wma',


    /** *********************************
     * Video Files
     ***********************************/

    /** 3GPP Multimedia File */
    '3gp',

    /** Advanced Systems Format File */
    'asf',

    /** Audio Video Interleave File */
    'avi',

    /** Flash Video */
    'flv',

    /** iTunes Video File */
    'm4v',

    /** Apple QuickTime Movie */
    'mov',

    /** MPEG-4 Video */
    'mp4',

    /** MPEG Video */
    'mpg',

    /** SubRip Subtitle File */
    'srt',

    /** Shockwave Flash Movie */
    'swf',

    /** Video Transport Stream File */
    'ts',

    /** DVD Video Object File */
    'vob',

    /** Windows Media Video */
    'wmv',


    /** *********************************
     * 3D Image Files
     ***********************************/

    /** Rhino 3D Model */
    '3dm',

    /** 3D Studio Scene */
    '3ds',

    /** Blender 3D Data File */
    'blend',

    /** Digital Asset Exchange File */
    'dae',

    /** Autodesk FBX Interchange File */
    'fbx',

    /** 3ds Max Scene File */
    'max',

    /** Wavefront 3D Object File */
    'obj',


    /** *********************************
     * Raster Image Files
     ***********************************/

    /** Bitmap Image */
    'bmp',

    /** DICOM Image */
    'dcm',

    /** DirectDraw Surface Image */
    'dds',

    /** DjVu Image */
    'djvu',

    /** Graphical Interchange Format File */
    'gif',

    /** High Efficiency Image Format */
    'heic',

    /** JPEG Image */
    'jpg',

    /** JPEG Image (Alternative) */
    'jpeg',

    /** Portable Network Graphic */
    'png',

    /** Adobe Photoshop Document */
    'psd',

    /** Targa Graphic */
    'tga',

    /** Tagged Image File */
    'tif',

    /** WebP Image */
    'webp',


    /** *********************************
     * Vector Image Files
     ***********************************/

    /** Adobe Illustrator Artwork */
    'ai',

    /** CorelDRAW File */
    'cdr',

    /** Enhanced Windows Metafile */
    'emf',

    /** Encapsulated PostScript File */
    'eps',

    /** PostScript File */
    'ps',

    /** Sketch Drawing */
    'sketch',

    /** Scalable Vector Graphic */
    'svg',

    /** Microsoft Visio Drawing */
    'vsdx',


    /** *********************************
     * Page Layout Files
     ***********************************/

    /** Adobe InDesign Document */
    'indd',

    /** OpenXPS File */
    'oxps',

    /** Portable Document Format File */
    'pdf',

    /** PageMaker Document */
    'pmd',

    /** Publisher Document */
    'pub',

    /** QuarkXPress Project File */
    'qxp',

    /** XML Paper Specification File */
    'xps',


    /** *********************************
     * Spreadsheet Files
     ***********************************/

    /** Apple Numbers Spreadsheet */
    'numbers',

    /** OpenDocument Spreadsheet */
    'ods',

    /** Works Spreadsheet */
    'xlr',

    /** Microsoft Excel Spreadsheet (Legacy) */
    'xls',

    /** Microsoft Excel Spreadsheet */
    'xlsx',


    /** *********************************
     * Database Files
     ***********************************/

    /** Access 2007 Database */
    'accdb',

    /** WhatsApp Encrypted Database File */
    'crypt14',

    /** Database File */
    'db',

    /** Microsoft Access Database */
    'mdb',

    /** OpenDocument Database */
    'odb',

    /** Program Database */
    'pdb',

    /** Structured Query Language Data File */
    'sql',

    /** SQLite Database */
    'sqlite',


    /** *********************************
     * Executable Files
     ***********************************/

    /** Android Package File */
    'apk',

    /** macOS Application Bundle */
    'app',

    /** DOS Batch File */
    'bat',

    /** Windows Command File */
    'cmd',

    /** DOS Command File */
    'com',

    /** Windows Executable File */
    'exe',

    /** iOS Application */
    'ipa',

    /** Java Archive */
    'jar',

    /** Linux Executable File */
    'run',

    /** Bash Shell Script */
    'sh',


    /** *********************************
     * Game Files
     ***********************************/

    /** Video Game Demo File */
    'dem',

    /** Saved Game File */
    'gam',

    /** Game Boy Advance ROM */
    'gba',

    /** NES ROM */
    'nes',

    /** Video Game Package */
    'pak',

    /** Video Game Save File */
    'sav',

    /** Nintendo DS Save File */
    'sav',


    /** *********************************
     * CAD Files
     ***********************************/

    /** MicroStation Design */
    'dgn',

    /** AutoCAD Drawing */
    'dwg',

    /** Drawing Exchange Format File */
    'dxf',

    /** STEP 3D Model */
    'step',

    /** Stereolithography File */
    'stl',

    /** STEP 3D CAD File */
    'stp',


    /** *********************************
     * GIS Files
     ***********************************/

    /** GPS Exchange File */
    'gpx',

    /** Keyhole Markup Language File */
    'kml',

    /** Google Earth Placemark File */
    'kmz',

    /** OpenStreetMap Map */
    'osm',


    /** *********************************
     * Web Files
     ***********************************/

    /** Active Server Page */
    'asp',

    /** Active Server Page Extended Webpage */
    'aspx',

    /** Internet Security Certificate */
    'cer',

    /** ColdFusion Markup File */
    'cfm',

    /** Certificate Signing Request File */
    'csr',

    /** Cascading Style Sheet */
    'css',

    /** Hypertext Markup Language File */
    'html',

    /** JavaScript File */
    'js',

    /** JSON File */
    'json',

    /** Jakarta Server Page */
    'jsp',

    /** PHP Source Code File */
    'php',

    /** Extensible Hypertext Markup Language File */
    'xhtml',


    /** *********************************
     * Plugin Files
     ***********************************/

    /** Chromium Extension */
    'crx',

    /** Outlook Add-in */
    'ecf',

    /** Adobe Photoshop Plug-in */
    'plugin',

    /** Apple Safari Extension */
    'safariextz',

    /** Cross-platform Installer Package */
    'xpi',


    /** *********************************
     * Font Files
     ***********************************/

    /** Windows Font File */
    'fnt',

    /** OpenType Font */
    'otf',

    /** TrueType Font */
    'ttf',

    /** Web Open Font Format File */
    'woff',

    /** Web Open Font Format 2.0 File */
    'woff2',


    /** *********************************
     * System Files
     ***********************************/

    /** Windows Animated Cursor */
    'ani',

    /** Windows Cabinet File */
    'cab',

    /** Windows Control Panel Item */
    'cpl',

    /** Windows Cursor Image */
    'cur',

    /** Windows 8 Desktop Theme Pack File */
    'deskthemepack',

    /** Dynamic Link Library */
    'dll',

    /** Windows Memory Dump */
    'dmp',

    /** Device Driver */
    'drv',

    /** macOS Icon Resource */
    'icns',

    /** Icon File */
    'ico',

    /** Windows Shortcut */
    'lnk',

    /** Registry File */
    'reg',

    /** Windows System File */
    'sys',


    /** *********************************
     * Settings Files
     ***********************************/

    /** Configuration File */
    'cfg',

    /** Windows Initialization File */
    'ini',

    /** Settings File */
    'set',


    /** *********************************
     * Encoded Files
     ***********************************/

    /** PGP ASCII Armored File */
    'asc',

    /** Encoded File */
    'enc',

    /** Multi-Purpose Internet Mail Message File */
    'mim',

    /** Uuencoded File */
    'uue',


    /** *********************************
     * Compressed Files
     ***********************************/

    /** 7-Zip Compressed File */
    '7z',

    /** Comic Book RAR Archive */
    'cbr',

    /** Debian Software Package */
    'deb',

    /** Gnu Zipped Archive */
    'gz',

    /** macOS Installer Package */
    'pkg',

    /** WinRAR Compressed Archive */
    'rar',

    /** Red Hat Package Manager File */
    'rpm',

    /** Compressed Tarball File */
    'tar.gz',

    /** Compressed Android Package */
    'xapk',

    /** Zipped File */
    'zip',

    /** Extended Zip Archive */
    'zipx',


    /** *********************************
     * Disk Image Files
     ***********************************/

    /** Apple Disk Image */
    'dmg',

    /** Disc Image Data File */
    'img',

    /** Disk Image File */
    'iso',

    /** Media Disc Image File */
    'mdf',

    /** Read Only Memory Image */
    'rom',

    /** Virtual CD */
    'vcd',


    /** *********************************
     * Developer Files
     ***********************************/

    /** Windows App Package */
    'appx',

    /** C/C++ Source Code File */
    'c',

    /** Java Class File */
    'class',

    /** Configuration File */
    'config',

    /** C++ Source Code File */
    'cpp',

    /** C# Source Code File */
    'cs',

    /** C/C++/Objective-C Header File */
    'h',

    /** Java Source Code File */
    'java',

    /** Kotlin Source Code File */
    'kt',

    /** Lua Source Code */
    'lua',

    /** Objective-C Implementation File */
    'm',

    /** Markdown Documentation File */
    'md',

    /** Perl Script */
    'pl',

    /** Python Script */
    'py',

    /** Scratch 3.0 Project */
    'sb3',

    /** Visual Studio Solution File */
    'sln',

    /** Swift Source Code File */
    'swift',

    /** Unity Scene File */
    'unity',

    /** Visual Basic Project Item File */
    'vb',

    /** Visual C++ Project */
    'vcxproj',

    /** Xcode Project */
    'xcodeproj',

    /** YAML Document */
    'yml',


    /** *********************************
     * Backup Files
     ***********************************/

    /** Automatic Backup File */
    'abk',

    /** Norton Backup Archive */
    'arc',

    /** Backup File */
    'bak',

    /** Temporary File */
    'tmp',


    /** *********************************
     * Misc Files
     ***********************************/

    /** Chrome Partially Downloaded File */
    'crdownload',

    /** Calendar File */
    'ics',

    /** Windows Installer Package */
    'msi',

    /** Android No Media File */
    'nomedia',

    /** Partially Downloaded File */
    'part',

    /** Apple Wallet Pass */
    'pkpass',

    /** BitTorrent File */
    'torrent',
] as const satisfies readonly string[];

export type FileExtension = (typeof FileExtension)[number] | (string & {});
export type FileExtensionWithDot = `.${typeof FileExtension[number]}` | (string & {});

/**
 * Infers a MIME type from a file extension.
 * @param extension The file extension to infer the MIME type from.
 * @returns The inferred MIME type as a string.
 */
export function inferMimeFromExtension(extension: FileExtension): MimeString {
    switch (extension) {
        case 'doc':
            return 'application/vnd.msword';
        case 'docx':
            return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        case 'eml':
            return 'message/rfc822';
        case 'msg':
            return 'application/vnd.ms-outlook';
        case 'odt':
            return 'application/vnd.oasis.opendocument.text';
        case 'pages':
            return 'application/vnd.apple.pages';
        case 'rtf':
            return 'application/rtf';
        case 'tex':
            return 'application/x-latex';
        case 'txt':
            return 'text/plain';
        case 'wpd':
            return 'application/vnd.wordperfect';
        case 'aae':
            return 'application/octet-stream';
        case 'bin':
            return 'application/octet-stream';
        case 'csv':
            return 'text/csv';
        case 'dat':
            return 'application/octet-stream';
        case 'key':
            return 'application/vnd.apple.keynote';
        case 'log':
            return 'text/plain';
        case 'mpp':
            return 'application/vnd.ms-project';
        case 'obb':
            return 'application/octet-stream';
        case 'ppt':
            return 'application/vnd.ms-powerpoint';
        case 'pptx':
            return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        case 'rpt':
            return 'application/vnd.crystalreports';
        case 'tar':
            return 'application/x-tar';
        case 'vcf':
            return 'text/x-vcard';
        case 'xml':
            return 'application/xml';
        case 'aif':
            return 'audio/aiff';
        case 'flac':
            return 'audio/x-flac';
        case 'm3u':
            return 'audio/x-mpegurl';
        case 'm4a':
            return 'audio/mp4';
        case 'mid':
            return 'audio/midi';
        case 'mp3':
            return 'audio/mpeg';
        case 'ogg':
            return 'audio/ogg';
        case 'wav':
            return 'audio/wav';
        case 'wma':
            return 'audio/x-ms-wma';
        case '3gp':
            return 'video/3gpp';
        case 'asf':
            return 'video/x-ms-asf';
        case 'avi':
            return 'video/x-msvideo';
        case 'flv':
            return 'video/x-flv';
        case 'm4v':
            return 'video/mp4';
        case 'mov':
            return 'video/quicktime';
        case 'mp4':
            return 'video/mp4';
        case 'mpg':
            return 'video/mpeg';
        case 'srt':
            return 'text/srt';
        case 'swf':
            return 'application/x-shockwave-flash';
        case 'ts':
            return 'video/mp2t';
        case 'vob':
            return 'video/dvd';
        case 'wmv':
            return 'video/x-ms-wmv';
        case '3dm':
            return 'model/vnd.3dm';
        case '3ds':
            return 'image/x-3ds';
        case 'blend':
            return 'application/x-blender';
        case 'dae':
            return 'model/vnd.collada+xml';
        case 'fbx':
            return 'application/x-fbx';
        case 'max':
            return 'application/x-3dsmax';
        case 'obj':
            return 'model/obj';
        case 'bmp':
            return 'image/bmp';
        case 'dcm':
            return 'application/dicom';
        case 'dds':
            return 'image/vnd.ms-dds';
        case 'djvu':
            return 'image/vnd.djvu';
        case 'gif':
            return 'image/gif';
        case 'heic':
            return 'image/heic';
        case 'jpg':
            return 'image/jpeg';
        case 'jpeg':
            return 'image/jpeg';
        case 'png':
            return 'image/png';
        case 'psd':
            return 'image/vnd.adobe.photoshop';
        case 'tga':
            return 'image/x-tga';
        case 'tif':
            return 'image/tiff';
        case 'webp':
            return 'image/webp';
        case 'ai':
            return 'application/postscript';
        case 'cdr':
            return 'application/cdr';
        case 'emf':
            return 'application/emf';
        case 'eps':
            return 'application/postscript';
        case 'ps':
            return 'application/postscript';
        case 'sketch':
            return 'application/x-sketch';
        case 'svg':
            return 'image/svg+xml';
        case 'vsdx':
            return 'application/vnd.ms-visio.drawing';
        case 'indd':
            return 'application/x-indesign';
        case 'oxps':
            return 'application/oxps';
        case 'pdf':
            return 'application/pdf';
        case 'pmd':
            return 'application/x-pagemaker';
        case 'pub':
            return 'application/x-mspublisher';
        case 'qxp':
            return 'application/x-quarkxpress';
        case 'xps':
            return 'application/vnd.ms-xpsdocument';
        case 'numbers':
            return 'application/vnd.apple.numbers';
        case 'ods':
            return 'application/vnd.oasis.opendocument.spreadsheet';
        case 'xlr':
            return 'application/vnd.ms-excel';
        case 'xls':
            return 'application/vnd.ms-excel';
        case 'xlsx':
            return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        case 'accdb':
            return 'application/vnd.ms-access';
        case 'crypt14':
            return 'application/octet-stream';
        case 'db':
            return 'application/octet-stream';
        case 'mdb':
            return 'application/x-msaccess';
        case 'odb':
            return 'application/vnd.oasis.opendocument.database';
        case 'pdb':
            return 'application/x-pdb';
        case 'sql':
            return 'application/sql';
        case 'sqlite':
            return 'application/x-sqlite3';
        case 'apk':
            return 'application/vnd.android.package-archive';
        case 'app':
            return 'application/x-app';
        case 'bat':
            return 'application/x-bat';
        case 'cmd':
            return 'application/x-ms-application';
        case 'com':
            return 'application/x-ms-application';
        case 'exe':
            return 'application/x-msdownload';
        case 'ipa':
            return 'application/x-ios-app';
        case 'jar':
            return 'application/java-archive';
        case 'run':
            return 'application/x-executable';
        case 'sh':
            return 'application/x-sh';
        case 'dem':
            return 'application/x-dem';
        case 'gam':
            return 'application/x-gam';
        case 'gba':
            return 'application/x-gba-rom';
        case 'nes':
            return 'application/x-nes-rom';
        case 'pak':
            return 'application/x-pak';
        case 'sav':
            return 'application/x-save-file';
        case 'dgn':
            return 'application/dgn';
        case 'dwg':
            return 'application/acad';
        case 'dxf':
            return 'application/dxf';
        case 'step':
            return 'model/step';
        case 'stl':
            return 'model/stl';
        case 'stp':
            return 'model/step';
        case 'gpx':
            return 'application/gpx+xml';
        case 'kml':
            return 'application/vnd.google-earth.kml+xml';
        case 'kmz':
            return 'application/vnd.google-earth.kmz';
        case 'osm':
            return 'application/x-osm+xml';
        case 'asp':
            return 'application/x-aspx';
        case 'aspx':
            return 'application/x-aspx';
        case 'cer':
            return 'application/x-x509-ca-cert';
        case 'cfm':
            return 'application/x-cfm';
        case 'csr':
            return 'application/pkcs10';
        case 'css':
            return 'text/css';
        case 'html':
            return 'text/html';
        case 'js':
            return 'application/javascript';
        case 'json':
            return 'application/json';
        case 'jsp':
            return 'application/x-jsp';
        case 'php':
            return 'application/x-httpd-php';
        case 'xhtml':
            return 'application/xhtml+xml';
        case 'crx':
            return 'application/x-chrome-extension';
        case 'ecf':
            return 'application/vnd.ms-outlook.ecf';
        case 'plugin':
            return 'application/x-adobe-photoshop-plugin';
        case 'safariextz':
            return 'application/x-safari-extension';
        case 'xpi':
            return 'application/x-xpinstall';
        case 'fnt':
            return 'application/x-font-fnt';
        case 'otf':
            return 'font/otf';
        case 'ttf':
            return 'font/ttf';
        case 'woff':
            return 'font/woff';
        case 'woff2':
            return 'font/woff2';
        case 'ani':
            return 'application/x-win-ani';
        case 'cab':
            return 'application/vnd.ms-cab-compressed';
        case 'cpl':
            return 'application/cpl';
        case 'cur':
            return 'application/x-win-cursor';
        case 'deskthemepack':
            return 'application/x-deskthemepack';
        case 'dll':
            return 'application/x-msdownload';
        case 'dmp':
            return 'application/octet-stream';
        case 'drv':
            return 'application/x-msdriver';
        case 'icns':
            return 'image/icns';
        case 'ico':
            return 'image/x-icon';
        case 'lnk':
            return 'application/x-ms-shortcut';
        case 'reg':
            return 'text/plain';
        case 'sys':
            return 'application/x-msdos-system';
        case 'cfg':
            return 'text/plain';
        case 'ini':
            return 'text/plain';
        case 'set':
            return 'text/plain';
        case 'asc':
            return 'application/pgp-keys';
        case 'enc':
            return 'application/octet-stream';
        case 'mim':
            return 'message/rfc822';
        case 'uue':
            return 'text/x-uuencode';
        case '7z':
            return 'application/x-7z-compressed';
        case 'cbr':
            return 'application/x-cbr';
        case 'deb':
            return 'application/x-deb';
        case 'gz':
            return 'application/gzip';
        case 'pkg':
            return 'application/octet-stream';
        case 'rar':
            return 'application/x-rar-compressed';
        case 'rpm':
            return 'application/x-rpm';
        case 'tar.gz':
            return 'application/gzip';
        case 'xapk':
            return 'application/x-apk';
        case 'zip':
            return 'application/zip';
        case 'zipx':
            return 'application/zip-compressed';
        case 'dmg':
            return 'application/x-apple-diskimage';
        case 'img':
            return 'application/octet-stream';
        case 'iso':
            return 'application/x-iso9660-image';
        case 'mdf':
            return 'application/x-mdf';
        case 'rom':
            return 'application/x-rom';
        case 'vcd':
            return 'application/x-cd-image';
        case 'appx':
            return 'application/appx';
        case 'c':
            return 'text/x-csrc';
        case 'class':
            return 'application/java-vm';
        case 'config':
            return 'text/plain';
        case 'cpp':
            return 'text/x-c++src';
        case 'cs':
            return 'text/x-csharp';
        case 'h':
            return 'text/x-chdr';
        case 'java':
            return 'text/x-java-source';
        case 'kt':
            return 'text/x-kotlin';
        case 'lua':
            return 'text/x-lua';
        case 'm':
            return 'text/x-objective-c';
        case 'md':
            return 'text/markdown';
        case 'pl':
            return 'text/x-perl';
        case 'py':
            return 'text/x-python';
        case 'sb3':
            return 'application/scratch3';
        case 'sln':
            return 'application/vnd.visualstudio.solution';
        case 'swift':
            return 'text/x-swift';
        case 'unity':
            return 'application/unity';
        case 'vb':
            return 'text/x-vb';
        case 'vcxproj':
            return 'application/vnd.visualstudio.vcxproj';
        case 'xcodeproj':
            return 'application/x-xcodeproj';
        case 'yml':
            return 'application/x-yaml';
        case 'abk':
            return 'application/x-abk';
        case 'arc':
            return 'application/x-arc';
        case 'bak':
            return 'application/x-bak';
        case 'tmp':
            return 'application/x-tmp';
        case 'crdownload':
            return 'application/x-chrome-download';
        case 'ics':
            return 'text/calendar';
        case 'msi':
            return 'application/x-msi';
        case 'nomedia':
            return 'text/plain';
        case 'part':
            return 'application/octet-stream';
        case 'pkpass':
            return 'application/vnd.apple.pkpass';
        case 'torrent':
            return 'application/x-bittorrent';
        default:
            return 'application/octet-stream';
    }
}
