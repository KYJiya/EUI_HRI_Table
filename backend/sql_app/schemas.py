from pydantic import BaseModel
from typing import Optional

class Hrieuv(BaseModel):
    dataname: str
    startdate: str
    enddate: str
    cadence: int
    distance: float
    solo_earth_angle: float
    file: int
    duration: int
    crval1: float
    crval2:  float
    soopname: str
    xposure: float
    filter: str
    target: str
    nbin1: int
    gaincomb: str
    recstate: str
    combitpp: int
    datamin: float
    datamax: float
    hglt_obs: float
    hgln_obs: float
    crlt_obs: float
    crln_obs: float
    Comments: Optional[str]

