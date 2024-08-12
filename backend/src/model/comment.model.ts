import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { QnA } from "./qn-a.model";
import { Ccomment } from "./ccomment.model";
import { UserSignUp } from "src/login/model/login.model";

@Table({
    timestamps: true,
    tableName: "Comments"
})

export class Comment extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    qna_comment: string;

    @HasMany(() => Ccomment, {
        sourceKey: "id",
        foreignKey: "qna_comment_id"
    })
    Ccomments: Ccomment[];

    @ForeignKey(() => UserSignUp)
    @Column
    nick_name: string;

    @BelongsTo(() => UserSignUp, {
        foreignKey: 'nick_name',
        targetKey: 'nick_name'
    })
    userDB: UserSignUp;

    @ForeignKey(() => QnA)
    @Column
    qna_id: number

    @BelongsTo(() => QnA)
    QnAs: QnA

}