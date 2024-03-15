from sqlalchemy import Column, Integer, String, Float

from .database import Base


class Hrieuv(Base):
    __tablename__ = "EUI_HRI_Lev2_LIST - HRIEUV_LIST_Release_6"

    dataname = Column("DATANAME", String)
    startdate = Column("STARTDATE&TIME", String, primary_key=True)
    enddate = Column("ENDDATE&TIME", String)
    cadence = Column("CADENCE(s)", Integer)
    distance = Column("DISTANCE(AU)", Float)
    solo_earth_angle = Column("SolO-EarthAngle", Float)
    file = Column("FILE#", Integer)
    duration = Column("Duration(s)", Integer)
    crval1 = Column("CRVAL1", Float)
    crval2 = Column("CRVAL2", Float)
    soopname = Column("SOOPNAME", String)
    xposure = Column("XPOSURE", Float)
    filter = Column("FILTER", String)
    target = Column("TARGET", String)
    nbin1 = Column("NBIN1", Integer)
    gaincomb = Column("GAINCOMB", String)
    recstate = Column("RECSTATE", String)
    combitpp = Column("COMBITPP", Integer)
    datamin = Column("DATAMIN", Float)
    datamax = Column("DATAMAX", Float)
    hglt_obs = Column("HGLT_OBS", Float)
    hgln_obs = Column("HGLN_OBS", Float)
    crlt_obs = Column("CRLT_OBS", Float)
    crln_obs = Column("CRLN_OBS", Float)
    Comments = Column("Comments", String)


