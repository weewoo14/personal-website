function formatDate(date: Date) {
  const year = String(date.getFullYear()).padStart(4, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export async function GET(req: Request) {
  const {searchParams} = new URL(req.url);
  const planetID = searchParams.get('planetID');

  const today = new Date( Date.now() );
  const tmrw = new Date();
  tmrw.setDate(today.getDate() + 1);

  const currentDate = formatDate(today);
  const tmrwDate = formatDate(tmrw);

  const response = await fetch(`https://ssd.jpl.nasa.gov/api/horizons.api?format=json` +
    `&COMMAND='${planetID}'` +
    "&OBJ_DATA='YES'" +
    "&EPHEM_TYPE='VECTORS'" +
    "&CENTER='500@10'" +
    `&START_TIME='${currentDate}'` +
    `&STOP_TIME='${tmrwDate}'` +
    "&STEP_SIZE='1d'" +
    "&OUT_UNITS='AU-D'" +
    "&REF_SYSTEM='ICRF'"
  );
  const data = await response.json();
  return Response.json(data);
}