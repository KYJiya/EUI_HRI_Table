from sqlalchemy.orm import Session

from . import models


def get_datas(db: Session):
    return db.query(models.Hrieuv).all()

