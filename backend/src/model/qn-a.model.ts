import { Model, Column, Table, DataType, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Comment } from "./comment.model";
import { UserSignUp } from "src/login/model/login.model";


@Table({
    timestamps: true,
    tableName: "QnAs"
})

export class QnA extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    qna_title: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    qna_content: string;

    @HasMany(() => Comment, {
        sourceKey: "id",
        foreignKey: "qna_id"
    })
    Comments: Comment[];

    @ForeignKey(() => UserSignUp)
    @Column
    nick_name: string;

    @BelongsTo(() => UserSignUp, {
        foreignKey: 'nick_name',
        targetKey: 'nick_name'
    })
    userDB: UserSignUp;
}